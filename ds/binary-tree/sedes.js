function Node(value, left = null, right = null) {
    if (!(this instanceof Node)) {
        return new Node(value, left, right);
    }
    this.value = value;
    this.left = left;
    this.right = right;
}

function serialize(root) {
    const out = [];
    function inorder(node) {
        if (!node) {
            out.push(".");
            return;
        }
        out.push(node.value);
        inorder(node.left);
        inorder(node.right);
    }
    inorder(root);
    return out.join(",");
}

function desiralize(serial) {
    const array = serial.split(",");
    let i = 0;
    function inorder() {
        const value = array[i++];
        if (value === "." || i > array.length) {
            return null;
        }
        const node = new Node(value);
        node.left = inorder();
        node.right = inorder();
        return node;
    }
    return inorder();
}

function test() {
    const tree = Node(1, Node(2), Node(3, null, Node(4, null, Node(5))));
    console.log(serialize(tree));
    console.log(desiralize(serialize(tree)));
}

test();
