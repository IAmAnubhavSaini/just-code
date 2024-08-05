// Attempt 1

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.sources = [];
    if (v1.length > 0) {
        this.sources.push(v1);
    }
    if (v2.length > 0) {
        this.sources.push(v2);
    }
    this.index = 0;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    this.sources = this.sources.filter((s) => s.length > 0);
    return this.sources.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if (this.hasNext()) {
        if (this.sources[this.index]?.length > 0) {
            const value = this.sources[this.index].shift();
            const newIndex = (this.index + 1) % 2;
            if (this.sources[newIndex]?.length > 0) {
                this.index = newIndex;
            } else {
                this.index = this.index;
            }
            return value;
        }
        this.index = (this.index + 1) % 2;
        if (this.sources[this.index]?.length > 0) {
            const value = this.sources[this.index].shift();
            const newIndex = (this.index + 1) % 2;
            if (this.sources[newIndex]?.length > 0) {
                this.index = newIndex;
            } else {
                this.index = this.index;
            }
            return value;
        }
    }
};
