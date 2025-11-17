#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}


void insertNode(struct Node* root, int newValue) {
    struct Node* newNode = createNode(newValue);
    struct Node* temp = root;
    char direction;

    while (1) {
        printf("Insert %d to left or right of %d? (L/R): ", newValue, temp->data);
        scanf(" %c", &direction);

        if (direction == 'L' || direction == 'l') {
            if (temp->left == NULL) {
                temp->left = newNode;
                printf("Inserted %d to left of %d\n", newValue, temp->data);
                return;
            } else {
                temp = temp->left;
            }
        } else if (direction == 'R' || direction == 'r') {
            if (temp->right == NULL) {
                temp->right = newNode;
                printf("Inserted %d to right of %d\n", newValue, temp->data);
                return;
            } else {
                temp = temp->right;
            }
        } else {
            printf("Invalid direction. Please enter 'L' or 'R'.\n");
        }
    }
}

struct Node* deleteNode(struct Node* root) {
    struct Node* temp = root;
    struct Node* parent = NULL;
    char dir;

    if (root == NULL) {
        printf("Tree is empty.\n");
        return NULL;
    }

    while (1) {
        printf("Go left or right from %d to find node to delete? (L/R), or 'D' to delete current node: ", temp->data);
        scanf(" %c", &dir);

        if (dir == 'D' || dir == 'd') {
            
            if (parent == NULL) {
                
                printf("Deleting root node %d\n", temp->data);
                if (temp->left == NULL && temp->right == NULL) {
                    
                    free(temp);
                    return NULL;
                } else if (temp->left == NULL) {
                    
                    struct Node* newRoot = temp->right;
                    free(temp);
                    return newRoot;
                } else if (temp->right == NULL) {
                    
                    struct Node* newRoot = temp->left;
                    free(temp);
                    return newRoot;
                } else {
                    
                    
                    struct Node* newRoot = temp->left;
                    struct Node* rightSubtree = temp->right;

                    
                    struct Node* rightmost = newRoot;
                    while (rightmost->right != NULL) {
                        rightmost = rightmost->right;
                    }
                    rightmost->right = rightSubtree;

                    free(temp);
                    return newRoot;
                }
            } else {
                
                if (parent->left == temp) {
                    parent->left = NULL;
                } else if (parent->right == temp) {
                    parent->right = NULL;
                }
                free(temp);
                printf("Node deleted.\n");
                return root;
            }
        } else if (dir == 'L' || dir == 'l') {
            if (temp->left == NULL) {
                printf("No left child to delete at %d.\n", temp->data);
                return root;
            }
            parent = temp;
            temp = temp->left;
        } else if (dir == 'R' || dir == 'r') {
            if (temp->right == NULL) {
                printf("No right child to delete at %d.\n", temp->data);
                return root;
            }
            parent = temp;
            temp = temp->right;
        } else {
            printf("Invalid input. Please enter 'L', 'R', or 'D'.\n");
        }
    }
}


void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct Node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main() {
    struct Node* root = NULL;
    int choice, value;
    char direction;

    while (1) {
        printf("\n--- Binary Tree Menu ---\n");
        printf("1. Insert\n2. Delete\n3. Inorder\n4. Preorder\n5. Postorder\n6. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                if (root == NULL) {
                    printf("Enter value for root node: ");
                    scanf("%d", &value);
                    root = createNode(value);
                } else {
                    printf("Enter new node value: ");
                    scanf("%d", &value);
                    insertNode(root, value);
                }
                break;

            case 2:
                if (root == NULL) {
        printf("Tree is empty.\n");
        break;
    }
    printf("Delete node by walking down the tree. Enter 'D' to delete current node.\n");
    root = deleteNode(root);
    break;

            case 3:
                printf("Inorder Traversal: ");
                inorder(root);
                printf("\n");
                break;

            case 4:
                printf("Preorder Traversal: ");
                preorder(root);
                printf("\n");
                break;

            case 5:
                printf("Postorder Traversal: ");
                postorder(root);
                printf("\n");
                break;

            case 6:
                exit(0);

            default:
                printf("Invalid choice!\n");
        }
    }

    return 0;
}

