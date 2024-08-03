class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        const q = [this.root];
        while (q.length > 0) {
            let currentNode = q.shift();
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return;
            } else if (currentNode.right === null) {
                currentNode.right = newNode;
                return;
            } else {
                q.push(currentNode.left);
                q.push(currentNode.right);
            }
        }
    }
    printLevelOrder() {
        console.log("[ " + this.levelOrder.join(", ") + " ]");
    }

    get levelOrder() {
        let out = [];
        const q = [this.root];
        while (q.length > 0) {
            const current = q.shift();
            if (current.left) {
                q.push(current.left);
            }
            if (current.right) {
                q.push(current.right);
            }
            out.push(current.value);
        }
        return out;
    }
}

function test1() {
    const tree = new BinaryTree();
    for (let i = 0; i < 10; i += 1) {
        tree.insert(i);
    }
    tree.printLevelOrder();
}

(function run() {
    test1();
})();
