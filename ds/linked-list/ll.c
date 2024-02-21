#include<stdio.h>
#include<stdlib.h>

typedef struct node {
    int value;
    struct node * next;
} node;

typedef struct list {
    struct node * HEAD;
    struct node * TAIL;
} list;

struct node* create_node(int value) {
    struct node* tmp = (struct node*) malloc(sizeof (struct node) * 1);
    if(tmp == NULL){
        perror("ERROR: cannot create a node\n");
        exit(1);
    }
    tmp -> value = value;
    tmp -> next = NULL;
    //printf("%p\n", (void *)tmp);
    return tmp;
}

struct node* delete_node(struct node * root) {
    struct node* next = root->next != NULL ? root->next : NULL;
    free(root);
    return next;
}

void print_node(struct node * root) {
    printf(" %d|%s ", root->value, root->next == NULL ? "x" : "->");
}

void print_list(struct list* lst) {
    struct node* tmp = lst->HEAD;
    printf("[");
    while(tmp != NULL) {
        print_node(tmp);
        tmp = tmp -> next;
    }
    printf("]\n");
}

struct node* append_node(struct node* root, struct node* curr) {
    if(root == NULL) { return NULL; }
    if(curr == NULL) { return root; }
    struct node* tmp = root;
    while(tmp -> next != NULL) {
        tmp = tmp -> next;
    }
    tmp -> next = curr;
    return root;
}

struct list* create_list() {
    struct list* lst = (struct list*)malloc(sizeof(struct list) * 1);
    if(lst == NULL) {
        perror("ERROR: cannot create a list\n");
        exit(1);
    }
    return lst;
}

struct list* add_node(struct list* lst, struct node * n) {
    if(lst->HEAD == NULL) {
        lst->HEAD = n;
        lst->TAIL = n;
    } else {
        // lst->TAIL = append_node(lst->TAIL, n);
        lst->TAIL->next = n;
        lst->TAIL = lst->TAIL->next;
    }
    return lst;
}

struct list* insert_at_beginning(struct list* lst, struct node *n) {
    if(lst == NULL) {
        lst = create_list();
        return add_node(lst, n);
    }
    if(n == NULL) {
        return lst;
    }
    n->next = lst->HEAD;
    lst->HEAD = n;
    return lst;
}

struct list* append_list(struct list* f, struct list* s) {
    if(f == NULL) { return s; }
    if(s == NULL) { return f; }
    f->TAIL->next = s->HEAD;
    f->TAIL = s->TAIL;
    // free s in future
    return f;
}

int main() {
    struct list * lst = create_list();

    struct node* first = create_node(10);
    struct node* second = create_node(20);
    lst = add_node(lst, first);
    lst = add_node(lst, second);

    struct node* third = create_node(30);
    print_list(lst);
    lst = add_node(lst, third);
    print_list(lst);

    struct node* zero = create_node(0);
    lst = insert_at_beginning(lst, zero);
    print_list(lst);

    struct list *evens = create_list();
    struct node* two = create_node(2);
    struct node* four = create_node(4);
    evens = add_node(evens, two);
    evens = add_node(evens, four);
    print_list(evens);

    struct list *odds = create_list();
    struct node* one = create_node(1);
    struct node* three = create_node(3);
    odds = add_node(odds, one);
    odds = add_node(odds, three);
    print_list(odds);

    struct list* naturals = append_list(evens, odds);
    print_list(naturals);
    print_list(evens);
    print_list(odds);



// At the end
    delete_node(first);
    delete_node(second);
    delete_node(third);

    return 0;
}











