type Stack struct {
	nodes []*TreeNode
}

// Push adds an element to the stack
func (s *Stack) Push(node *TreeNode) {
	s.nodes = append(s.nodes, node)
}

func (s *Stack) HasItems() bool {
	return len(s.nodes) > 0
}

// Pop removes and returns the top element of the stack
func (s *Stack) Pop() *TreeNode {
	if len(s.nodes) == 0 {
		return nil
	}
	node := s.nodes[len(s.nodes)-1]
	s.nodes = s.nodes[:len(s.nodes)-1]
	return node
}

// upsideDownBinaryTree function
func upsideDownBinaryTree(root *TreeNode) *TreeNode {
	if root == nil || root.Left == nil {
		return root
	}

	stack := &Stack{}
	current := root
	for current != nil {
		stack.Push(current)
		current = current.Left
	}

	current = stack.Pop()
	newRoot := current

	for stack.HasItems() {
		parent := stack.Pop()
		current.Left = parent.Right
		current.Right = parent
		parent.Left = nil
		parent.Right = nil
		current = parent
	}

	return newRoot
}

