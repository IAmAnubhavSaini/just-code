package BinaryTree

type BinaryTreeNode struct {
	Value int
	Left  *BinaryTreeNode
	Right *BinaryTreeNode
}

type Stack struct {
	store []*BinaryTreeNode
}

func (s *Stack) Push(node *BinaryTreeNode) {
	s.store = append(s.store, node)
}

func (s *Stack) Pop() *BinaryTreeNode {
	if s.IsEmpty() {
		return nil
	}
	node := s.store[len(s.store)-1]
	s.store = s.store[:len(s.store)-1]
	return node
}

func (s *Stack) HasItems() bool {
	return len(s.store) > 0
}

func (s *Stack) IsEmpty() bool {
	return len(s.store) <= 0
}
