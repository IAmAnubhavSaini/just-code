package main

import "fmt"

type Node struct {
	Value string
	Left  *Node
	Right *Node
}

func insert(root *Node, value string) *Node {
	newNode := &Node{Value: value}
	if root == nil {
		return newNode
	}
	var q []*Node
	q = append(q, root)

	for len(q) > 0 {
		current := q[0]
		q = q[1:]
		if current.Left == nil {
			current.Left = newNode
			break
		} else if current.Right == nil {
			current.Right = newNode
			break
		} else {
			q = append(q, current.Left, current.Right)
		}
	}
	return root
}

func main() {
	root := insert(nil, "+")
	root = insert(root, "*")
	root = insert(root, "/")
	root = insert(root, "a")
	root = insert(root, "b")
	root = insert(root, "c")
	root = insert(root, "d")

	fmt.Println("\nIn order traversal:")
	inOrderTraversal(root)
	fmt.Println("\nPre order traversal:")
	preOrderTraversal(root)
	fmt.Println("\nPost order traversal:")
	postOrderTraversal(root)
}

func inOrderTraversal(node *Node) {
	if node == nil {
		return
	}
	inOrderTraversal(node.Left)
	fmt.Print(node.Value, " ")
	inOrderTraversal(node.Right)
}

func preOrderTraversal(node *Node) {
	if node == nil {
		return
	}
	fmt.Print(node.Value, " ")
	preOrderTraversal(node.Left)
	preOrderTraversal(node.Right)
}

func postOrderTraversal(node *Node) {
	if node == nil {
		return
	}
	postOrderTraversal(node.Left)
	postOrderTraversal(node.Right)
	fmt.Print(node.Value, " ")
}
