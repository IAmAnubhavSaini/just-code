/**
 * This code works, but fails for large values of k, like 15000 or something
 * obviously, the insertion sort is not a good way to solve it.
 * obviously, the js code shouldn't be handling stuff larger than 10k in arrays.
 * I just wanted to see if the solution can be reached.
 * which it did; now we need to solve for the speed and scale problem.
 * using entirely different technique.
 */

function insertionSort(array, value) {
    let i = 0;
    const len = array.length;
    if (len === 0) {
        array.push(value);
        return array;
    }
    if (array[0] >= value) {
        array.unshift(value);
        return array;
    }
    if (array[len - 1] <= value) {
        array.push(value);
        return array;
    }
    while (i < array.length && array[i] <= value) {
        i += 1;
    }
    return [...array.slice(0, i), value, ...array.slice(i)];
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let arr = [];
    let i = 0;
    let len = nums.length;
    while (i < len) {
        arr = insertionSort(arr, nums[i]);
        i += 1;
    }
    return arr[arr.length - k];
};
