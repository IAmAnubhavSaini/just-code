/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
    while (sx <= tx && sy <= ty) {
        if (tx === ty) {
            break;
        }
        if (tx > ty) {
            if (ty > sy) {
                tx = tx % ty;
            } else {
                return (tx - sx) % ty === 0;
            }
        } else {
            if (tx > sx) {
                ty = ty % tx;
            } else {
                return (ty - sy) % tx === 0;
            }
        }
    }
    return tx === sx && ty === sy;
};
