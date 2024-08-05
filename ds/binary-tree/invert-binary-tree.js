function invertTree1(root) {
    if (root === null) {
        return null;
    }

    const left = invertTree1(root.left);
    const right = invertTree1(root.right);

    root.left = right;
    root.right = left;

    return root;
}

function invertTree2(root) {
    if (!root) {
        return null;
    }
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return root;
}

function invertTree3(root) {
    if (!root) {
        return root;
    }
    [root.left, root.right] = [invertTree3(root.right), invertTree3(root.left)];
    return root;
}

function invertTree4(root) {
    if (!root) {
        return root;
    }
    [root.left, root.right] = [root.right, root.left];
    invertTree4(root.left);
    invertTree4(root.right);
    return root;
}

class BinaryTreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function generateBinaryTree() {
    return BinaryTreeNode(
        1,
        BinaryTreeNode(2, BinaryTreeNode(4), BinaryTreeNode(5)),
        BinaryTreeNode(3, BinaryTreeNode(6), BinaryTreeNode(7))
    );
}

function treeToString(root) {
    if (root === null) {
        return "x";
    }

    const leftStr = treeToString(root.left);
    const rightStr = treeToString(root.right);

    return `[${root.value} (${leftStr}) {${rightStr}}]`.replace("null", "x");
}

let invertTreeFn = invertTree4;

function test1() {
    const root = null;
    console.log(treeToString(root));
    const result = invertTreeFn(root);
    console.log(treeToString(result));
    return result === null;
}

function test2() {
    const root = new BinaryTreeNode(1);
    console.log(treeToString(root));
    const result = invertTreeFn(root);
    console.log(treeToString(result));
    return result.value === 1 && result.left === null && result.right === null;
}

function test3() {
    const root = new BinaryTreeNode(1, new BinaryTreeNode(2));
    console.log(treeToString(root));
    const result = invertTreeFn(root);
    console.log(treeToString(result));
    return result.value === 1 && result.left === null && result.right.value === 2;
}

function test4() {
    const root = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
    console.log(treeToString(root));
    const result = invertTreeFn(root);
    console.log(treeToString(result));
    return result.value === 1 && result.left.value === 3 && result.right.value === 2;
}

function test5() {
    const root = new BinaryTreeNode(
        1,
        new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)),
        new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7))
    );
    console.log(treeToString(root));
    const result = invertTreeFn(root);
    console.log(treeToString(result));
    return (
        result.value === 1 &&
        result.left.value === 3 &&
        result.right.value === 2 &&
        result.left.left.value === 7 &&
        result.left.right.value === 6 &&
        result.right.left.value === 5 &&
        result.right.right.value === 4
    );
}

function test6() {
    // Create a skewed binary tree (right-skewed)
    const root = new BinaryTreeNode(
        1,
        null,
        new BinaryTreeNode(2, null, new BinaryTreeNode(3, null, new BinaryTreeNode(4)))
    );
    console.log(treeToString(root));
    // Invert the tree
    const result = invertTree2(root);
    console.log(treeToString(result));

    // Check the inverted tree structure
    return (
        result.value === 1 &&
        result.left.value === 2 &&
        result.left.left.value === 3 &&
        result.left.left.left.value === 4 &&
        result.right === null &&
        result.left.right === null &&
        result.left.left.right === null &&
        result.left.left.left.right === null
    );
}

// Run tests and log results
console.log("Test 1 passed:", test1());
console.log("Test 2 passed:", test2());
console.log("Test 3 passed:", test3());
console.log("Test 4 passed:", test4());
console.log("Test 5 passed:", test5());
console.log("Test 6 passed:", test6());
