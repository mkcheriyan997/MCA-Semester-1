#include <stdio.h>

#define MAX 20

int parent[MAX], rank[MAX];

void makeSet(int n) {
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
}

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);
    return parent[x];
}

void unionSets(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);

    if (rootX == rootY) {
        printf("%d and %d are already in the same set.\n", x, y);
        return;
    }

    if (rank[rootX] < rank[rootY])
        parent[rootX] = rootY;
    else if (rank[rootX] > rank[rootY])
        parent[rootY] = rootX;
    else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }

    printf("Union of %d and %d done.\n", x, y);
}

void display(int n) {
    printf("\nElement: ");
    for (int i = 1; i <= n; i++) printf("%d ", i);
    printf("\nParent:  ");
    for (int i = 1; i <= n; i++) printf("%d ", parent[i]);
    printf("\nRank:    ");
    for (int i = 1; i <= n; i++) printf("%d ", rank[i]);
    printf("\n");
}

int main() {
    int n, choice, x, y;

    printf("Enter number of elements (max %d): ", MAX);
    scanf("%d", &n);

    makeSet(n);

    while (1) {
        printf("\n1. Union\n2. Find\n3. Display\n4. Exit\nEnter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter two elements: ");
                scanf("%d %d", &x, &y);
                if (x >= 1 && x <= n && y >= 1 && y <= n)
                    unionSets(x, y);
                else
                    printf("Invalid elements!\n");
                break;

            case 2:
                printf("Enter element to find: ");
                scanf("%d", &x);
                if (x >= 1 && x <= n)
                    printf("Representative of %d is %d\n", x, find(x));
                else
                    printf("Invalid element!\n");
                break;

            case 3:
                display(n);
                break;

            case 4:
                return 0;

            default:
                printf("Invalid choice!\n");
        }
    }
}

