/** 159 Longest Substring with at most two distinct characters
 * Notice what are trying to achieve   ^^^^^^^^^^^^^
 * on leetcode it is worst performing js solution. ¯\_(ツ)_/¯
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringTwoDistinct(s) {
    const distinctCount = 2;
    const len = s.length;
    if (len <= distinctCount) {
        return len;
    }
    /* At this point we already have substring whose length
     * should be equal to 2 at the least.
     * but for the sake of programming, we will start with 0
     */
    let maxLen = 0;

    /* also we need a hashmap, where we will record characters
     * and their latest seen poisition
     * this will also let us keep track of number of unique
     * characters we have seen
     */
    const hashmap = {};

    /* Now we need two pointers: left and right
     * these pointers will track the current substring under consideration
     */
    for (let left = 0, right = 0; right < len; right += 1) {
        /* take the currenct character
         * update it's latest seen index
         */
        const char = s[right];
        hashmap[char] = right;

        /* We can only have at most distinctCount=2 unique chars
         * so, we will take the leftmost character,
         * which will have the least index value
         * and remove it from the hashmap
         */
        const keys = Object.keys(hashmap);
        if (keys.length > distinctCount) {
            const values = Object.values(hashmap);
            const minValue = Math.min.apply(null, values);
            const charToDelete = s[minValue];
            delete hashmap[charToDelete];
            left = minValue + 1;
        }
        maxLen = Math.max(maxLen, right + 1 - left);
    }
    return maxLen;
}

/** fast. beats 96%
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    len = s.length;
    distinct = 2;
    if (len <= distinct) {
        return len;
    }
    freq = [];
    uniq = 0;
    maxLen = 0;
    for (left = 0, right = 0; right < len; right += 1) {
        // console.log({freq, uniq, left, right})
        if (!freq[s[right].charCodeAt(0)]) {
            uniq += 1;
            freq[s[right].charCodeAt(0)] = 0;
        }
        freq[s[right].charCodeAt(0)] += 1;

        if (uniq > distinct) {
            freq[s[left].charCodeAt(0)] -= 1;
            if (freq[s[left].charCodeAt(0)] === 0) {
                uniq -= 1;
            }
            left += 1;
        }
        maxLen = Math.max(maxLen, right + 1 - left);
    }
    return maxLen;
};

/** fast. beats 85%
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    len = s.length;
    distinct = 2;
    if (len <= distinct) {
        return len;
    }
    freq = {};
    uniq = 0;
    maxLen = 0;
    for (left = 0, right = 0; right < len; right += 1) {
        // console.log({freq, uniq, left, right})
        if (!freq[s[right]]) {
            uniq += 1;
            freq[s[right]] = 0;
        }
        freq[s[right]] += 1;

        if (uniq > distinct) {
            freq[s[left]] -= 1;
            if (freq[s[left]] === 0) {
                uniq -= 1;
            }
            left += 1;
        }
        maxLen = Math.max(maxLen, right + 1 - left);
    }
    return maxLen;
};
