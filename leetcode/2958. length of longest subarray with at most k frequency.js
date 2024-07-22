/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const maxFreq = k;
    const len = nums.length;
    const freq = [];
    const hashmap = {};
    let maxLen = 0;

    for (let left = 0, right = 0; right < len; right += 1) {
        freq[nums[right]] = (freq[nums[right]] || 0) + 1;

        while (freq[nums[right]] > maxFreq) {
            freq[nums[left]] -= 1;
            left += 1;
        }
        maxLen = Math.max(maxLen, right + 1 - left);
    }
    return maxLen;
};
