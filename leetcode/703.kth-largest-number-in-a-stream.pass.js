/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.sorted = [];
    nums.forEach((v) => {
        // console.log({v, s: this.sorted})
        this.sorted = insertionSort(this.sorted, v);
    });
    this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.sorted = insertionSort(this.sorted, val);
    // console.log(this.sorted, this.k);
    return this.sorted[this.sorted.length - this.k];
};

/*
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function insertionSort(array, value) {
    if (array.length === 0) {
        array.push(value);
        return array;
    }
    if (array[0] >= value) {
        array.unshift(value);
        return array;
    }
    if (array[array.length - 1] <= value) {
        array.push(value);
        return array;
    }

    let i = array.length - 1;
    while (array[i] >= value && i >= 0) {
        array[i + 1] = array[i];
        i -= 1;
    }
    array[i + 1] = value;
    return array;
}
