class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    insert(value) {
        const newNode = new Node(value);
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
    printCompleteLevelOrder() {
        console.log("[ " + this.completeLevelOrder.join(", ") + " ]");
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

    get completeLevelOrder() {
        const skipValue = "null";
        let out = [];
        let next = [this.root];
        let level = -1;
        while (next.some((node) => node)) {
            level += 1;
            out = out.concat(
                next.map((node, i) => {
                    if (node) {
                        return `${Math.pow(2, level) - 1 + i}:${node.value}`;
                    } else {
                        return skipValue;
                    }
                })
            );
            next = next
                .map((node) => {
                    if (node) {
                        return [node.left, node.right];
                    } else {
                        return [null, null];
                    }
                })
                .flat();
        }
        return this.trim(out, skipValue).filter((v) => v !== skipValue);
    }

    trim(array, value) {
        let i = 0;
        while (array[i] === value) {
            i += 1;
        }
        let j = array.length - 1;
        while (array[j] === value) {
            j -= 1;
        }
        return array.slice(i, j + 1);
    }

    static fromCompleteLevelOrder(order, skipValue = "null") {
        if (order.length === 0) {
            return null;
        }
        const nodes = [new Node(parseInt(order[0].split(":")[1]))];
        for (let i = 1; i < order.length; i += 1) {
            const [index, value] = order[i].split(":");
            const newNode = new Node(parseInt(value));
            if ((index - 1) % 2 === 1) {
                nodes[nodes.length - 1].right = newNode;
            } else {
                nodes[nodes.length - 1].left = newNode;
            }
            nodes.push(newNode);
        }
        return new BinaryTree(nodes[0]);
    }
}

function test1() {
    // const tree = new BinaryTree();
    // for (let i = 1; i < 11; i += 1) {
    //     tree.insert(i);
    // }
    // tree.printLevelOrder();
    // tree.printCompleteLevelOrder();

    const rightSkewTree = new BinaryTree(new Node(1, null, new Node(2, null, new Node(3, null, new Node(4)))));
    rightSkewTree.printCompleteLevelOrder();
    const newRightSkewTree = BinaryTree.fromCompleteLevelOrder(rightSkewTree.completeLevelOrder, "null");
    console.log(newRightSkewTree);
    newRightSkewTree.printCompleteLevelOrder();

    // const weirdTree = new BinaryTree(
    //     new Node(1, new Node(2), new Node(3, new Node(4, new Node(6), new Node(7)), new Node(5)))
    // );
    // console.log(weirdTree.completeLevelOrder, weirdTree.levelOrder);
    // const recreateWeirdTree = BinaryTree.fromCompleteLevelOrder(weirdTree.completeLevelOrder, "null");
    // console.log(recreateWeirdTree, recreateWeirdTree.completeLevelOrder, recreateWeirdTree.levelOrder);
}

(function run() {
    test1();
})();
