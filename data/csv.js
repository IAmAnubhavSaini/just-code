const { readFileSync } = require('fs');

class CSV {
    constructor(filepath) {
        if (typeof filepath !== 'string' || !filepath.trim()) {
            throw new Error('filepath is required and must be a non-empty string');
        }
        this.filepath = filepath;
        this.data = null;
        this.LE = null;
        this.headers = null;
        this.lines = null;

        this.data = readFileSync(this.filepath, 'utf8');
        const crlf = this.data.match(/\r\n/g);
        const lf = this.data.match(/\n/g);
        if (crlf && crlf.length > lf.length) {
            this.LE = '\r\n';
        } else {
            this.LE = '\n';
        }

        const [first, ...rest] = this.data.split(this.LE);
        this.headers = first.split(',');
        this.lines = rest.map(l => l.split(','));
        this.json = this.lines.map(l => {
            const obj = {};
            this.headers.forEach((h, i) => {
                obj[h] = l[i];
            });
            return obj;
        });

        // Create functions for each header
        this.headers.forEach(h => {
            this["hfn_" + h] = () => {
                return this.lines.map(l => l[this.headers.indexOf(h)]);
            };
        });
    }

    first(n) {
        return this.lines.slice(0, n);
    }

    last(n) {
        return this.lines.slice(-n);
    }
}



module.exports = CSV;
