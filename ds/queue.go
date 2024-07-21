package main

import (
	"fmt"
)

type Queue[T any] struct {
	items []T
}

func NewQueue[T any]() *Queue[T] {
	return &Queue[T]{}
}

// Enqueue adds an item to the end of the queue
func (q *Queue[T]) Enqueue(item T) {
	q.items = append(q.items, item)
}

// Dequeue removes and returns the item from the front of the queue
// It returns the zero value of T if the queue is empty
func (q *Queue[T]) Dequeue() (T, bool) {
	var zeroValue T
	if len(q.items) == 0 {
		return zeroValue, false
	}
	item := q.items[0]
	q.items = q.items[1:]
	return item, true
}

// Length returns the number of items in the queue
func (q *Queue[T]) Length() int {
	return len(q.items)
}

// Process accepts a function that processes each dequeued item
func (q *Queue[T]) Process(processFunc func(T)) {
	for {
		item, ok := q.Dequeue()
		if !ok {
			break
		}
		processFunc(item)
	}
}

func Map[T, U any](q *Queue[T], mapFn func(T) U) *Queue[U] {
	us := NewQueue[U]()
	for _, t := range q.items {
		us.Enqueue(mapFn(t))
	}
	return us
}

func main() {
	queue := NewQueue[int]()

	queue.Enqueue(1)
	queue.Enqueue(2)
	queue.Enqueue(3)

	fmt.Println("Length before processing:", queue.Length()) // Output: Length before processing: 3

	queue.Process(func(item int) {
		fmt.Println("Processing item:", item)
	})

	fmt.Println("Length after processing:", queue.Length()) // Output: Length after processing: 0

}
