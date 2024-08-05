/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    return zip(word1.split(""), word2.split(""));
};

function zip(a, b) {
    if (a.length === 0 && b.length === 0) {
        return "";
    }
    if (a.length === 0) {
        return b.join("");
    }
    if (b.length === 0) {
        return a.join("");
    }
    return (a[0] || "") + (b[0] || "") + zip(a.slice(1), b.slice(1));
}
