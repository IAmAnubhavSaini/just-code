/**
 * MaxHeap
 * */
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    /**
     *  Get the left child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    /**
     *  Get the right child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    /**
     *  Get the parent index
     *  @param {number} childIndex
     *  @return {number}
     *  */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * Check if the left child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    /**
     * Check if the right child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    /**
     * Check if the parent exists
     * @param {number} index
     * @return {boolean}
     * */
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    /**
     *  Get the left child
     *  @param {number} index
     *  @return {number}
     *  */
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    /**
     * Get the right child
     * @param {number} index
     * @return {number}
     * */
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    /**
     * Get the parent
     * @param {number} index
     * @return {number}
     * */
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    /**
     * Swap two items in the heap
     * @param {number} index1
     * @param {number} index2
     * */
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    /**
     * Get the biggest item from the heap
     * @return {number}
     * */
    peek() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        return this.heap[0];
    }

    /**
     * Poll the biggest item from the heap
     * @return {number}
     * */
    poll() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    /**
     * Add an item to the heap
     * @param {number} item
     * */
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    /**
     * Move the item up the heap
     * */
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    /**
     * Move the item down the heap
     * */
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

module.exports = { MaxHeap };

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MaxHeap();
    nums.forEach((n) => this.heap.add(n));
    this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.add(val);
    const out = [];
    for (let i = 1; i < this.k; i += 1) {
        out.push(this.heap.poll());
    }
    const num = this.heap.poll();
    out.forEach((n) => this.heap.add(n));
    return num;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// attempt 2

/**
 * MinHeap
 * */
class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }
    /**
     *  Get the left child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    /**
     *  Get the right child index
     *  @param {number} parentIndex
     *  @return {number}
     *  */
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    /**
     *  Get the parent index
     *  @param {number} childIndex
     *  @return {number}
     *  */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * Check if the left child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    /**
     * Check if the right child exists
     * @param {number} index
     * @return {boolean}
     * */
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    /**
     * Check if the parent exists
     * @param {number} index
     * @return {boolean}
     * */
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    /**
     *  Get the left child
     *  @param {number} index
     *  @return {number}
     *  */
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    /**
     * Get the right child
     * @param {number} index
     * @return {number}
     * */
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    /**
     * Get the parent
     * @param {number} index
     * @return {number}
     * */
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    /**
     * Swap two items in the heap
     * @param {number} index1
     * @param {number} index2
     * */
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    /**
     * Get the smallest item from the heap
     * @return {number}
     * */
    peek() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        return this.heap[0];
    }

    /**
     * Poll the smallest item from the heap
     * @return {number}
     * */
    poll() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.size -= 1;
        this.heapifyDown();
        return item;
    }

    /**
     * Add an item to the heap
     * @param {number} item
     * */
    add(item) {
        this.heap.push(item);
        this.size += 1;
        this.heapifyUp();
    }

    /**
     * Move the item up the heap
     * */
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    /**
     * Move the item down the heap
     * */
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

module.exports = { MinHeap };

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinHeap();
    nums.forEach((v) => this.heap.add(v));
    this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.add(val);
    while (this.heap.size > this.k) {
        this.heap.poll();
    }
    return this.heap.poll();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
