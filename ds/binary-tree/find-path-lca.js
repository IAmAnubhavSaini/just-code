class BinaryTreeNode {
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

    findPath(nodeToFind) {
        if(!nodeToFind) {
            return [false, []]
        }
        const findPathRecursive = (currentNode, currentPath) => {
            if (!currentNode) return [false, []];
            if (currentNode.value === nodeToFind.value) return [true, currentPath];

            const newPath = [...currentPath, currentNode.value];
            let [foundPath, resultPath] = findPathRecursive(currentNode.left, newPath);
            if (foundPath) return [foundPath, resultPath];

            [foundPath, resultPath] = findPathRecursive(currentNode.right, newPath);
            return [foundPath, resultPath];
        };

        return findPathRecursive(this.root, []);
    }

    commonAncestor(a, b) {
        if (!this.root || !a || !b) return [false, null];
        if (a === b) return [true, a];

        const [foundA, pathA] = this.findPath(a);
        const [foundB, pathB] = this.findPath(b);

        if (!foundA || !foundB) return [false, null];

        let i = 0;
        while (i < pathA.length && i < pathB.length && pathA[i] === pathB[i]) {
            i += 1;
        }

        if (i > 0) return [true, pathA[i - 1]];
        return [false, null];
    }
}

function generateBinaryTree() {
    return new BinaryTree(
        new BinaryTreeNode(
            "+",
            new BinaryTreeNode("*", new BinaryTreeNode("a"), new BinaryTreeNode("b")),
            new BinaryTreeNode("/", new BinaryTreeNode("c"), new BinaryTreeNode("d", new BinaryTreeNode("k"), new BinaryTreeNode("l")))
        )
    );
}

function test1() {
    console.log("test1");
    const tree = generateBinaryTree();
    const a = tree.root.left.left;
    const [foundPath, path] = tree.findPath(a);
    console.log(foundPath, path);
    const b = tree.root.right.right;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const c = tree.root.right.left.right;
    const [foundPathC, pathC] = tree.findPath(c);
    console.log(foundPathC, pathC);
}

function test2() {
    console.log("test2");
    const tree = generateBinaryTree();
    const a = tree.root.left.left;
    const [foundPathA, pathA] = tree.findPath(a);
    console.log(foundPathA, pathA);
    const b = tree.root.right.right.right;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const [foundCommonAncestor, ancestor] = tree.commonAncestor(a, b);
    console.log({ foundCommonAncestor, ancestor });
}

function test3() {
    console.log("test3");
    const tree = generateBinaryTree();
    const a = tree.root.right.right;
    const [foundPathA, pathA] = tree.findPath(a);
    console.log(foundPathA, pathA);
    const b = tree.root.right.right.right;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const [foundCommonAncestor, ancestor] = tree.commonAncestor(a, b);
    console.log({ foundCommonAncestor, ancestor });
}

function test4() {
    console.log("test4");
    const tree = generateBinaryTree();
    const a = tree.root.right.right;
    const [foundPathA, pathA] = tree.findPath(a);
    console.log(foundPathA, pathA);
    const b = null;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const [foundCommonAncestor, ancestor] = tree.commonAncestor(a, b);
    console.log({ foundCommonAncestor, ancestor });
}

function test5() {
    console.log("test5");
    const tree = new BinaryTree(null);
    const a = null;
    const [foundPathA, pathA] = tree.findPath(a);
    console.log(foundPathA, pathA);
    const b = null;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const [foundCommonAncestor, ancestor] = tree.commonAncestor(a, b);
    console.log({ foundCommonAncestor, ancestor });
}

function test6() {
    console.log("test6");
    const tree = generateBinaryTree();
    const a = tree.root.right.right;
    const [foundPathA, pathA] = tree.findPath(a);
    console.log(foundPathA, pathA);
    const b = generateBinaryTree().root.right.right.right;
    const [foundPathB, pathB] = tree.findPath(b);
    console.log(foundPathB, pathB);
    const [foundCommonAncestor, ancestor] = tree.commonAncestor(a, b);
    console.log({ foundCommonAncestor, ancestor });
}

(function run() {
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
})();
