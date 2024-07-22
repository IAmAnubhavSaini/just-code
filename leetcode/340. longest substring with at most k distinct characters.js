/** Given a string s and an integer k, return the length of the longest
substring
of s that contains at most k distinct characters.
related: 159
*/

/** beats 18%
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    const distinct = k;
    const len = s.length;
    if (len < distinct) {
        return len;
    }
    const hashmap = {};
    let maxLen = 0;
    for (let left = 0, right = 0; right < len; right += 1) {
        hashmap[s[right]] = right;

        const keys = Object.keys(hashmap);
        if (keys.length > distinct) {
            minValue = Math.min(...Object.values(hashmap));
            delete hashmap[s[minValue]];
            left = minValue + 1;
        }
        maxLen = Math.max(maxLen, right + 1 - left);
    }
    return maxLen;
};

/** beats 68.26%
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    const distinct = k;
    const len = s.length;
    if (len < distinct) {
        return len;
    }
    const freq = {};
    let uniq = 0;
    let maxLen = 0;
    for (let left = 0, right = 0; right < len; right += 1) {
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
