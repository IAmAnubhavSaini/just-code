function Node(value) {
    if (!(this instanceof Node)) {
        return new Node(value);
    }
    if (typeof value !== "number") {
        return [Error("not a number"), null];
    }
    this.value = value;
    this.next = null;
    return [null, this];
}

Node.prototype.toString = function () {
    return `Node{ ${this.value} | ${this.next ? "-->" : "X"} }`;
};

// var [_, head] = new Node(10);
// console.log({ head });

// [_, node] = new Node("asd");
// console.log({ _, node });

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        let [error, node] = new Node(value);
        if (error) {
            return [error, null];
        }
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        return [null, this];
    }
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return [null, current];
            }
            current = current.next;
        }
        return [null, null];
    }
    removeByValue(value) {
        while (this.head && this.head.value === value) {
            const tmp = this.head;
            this.head = this.head.next;
            tmp.next = null;
        }
        if (!this.head || !this.head.next) {
            return [null, this];
        }
        let previous = this.head;
        let current = previous.next;
        while (current) {
            if (current.value === value) {
                previous.next = current.next;
                current.next = null;
            }
            previous = current;
            current = current.next;
        }
        return [null, this];
    }
    toString() {
        let current = this.head;
        let out = "LinkedList{ ";
        if (current) {
            out += "HEAD-->";
        }
        let i = 0;
        while (current) {
            out += ` ${i}:${current.toString()}`;
            current = current.next;
            i += 1;
        }
        if (this.tail) {
            out += `, TAIL --> ${this.tail.toString()} }`;
        }
        return out;
    }
    print() {
        console.log(this.toString());
    }
}

var list = new LinkedList();
var [error, list] = list.append(10);
// console.log({ error, list });
if (error) {
    console.log({ error, list });
}
var [error, list] = list.append(20);
if (error) {
    console.log({ error, list });
}
var [error, list] = list.append(30);
if (error) {
    console.log({ error, list });
}
if (!error) {
    list.print();
}
