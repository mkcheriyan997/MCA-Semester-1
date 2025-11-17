#include <stdio.h>
#include <stdlib.h>

#define MAX 20
#define INF 9999

int cost[MAX][MAX], visited[MAX], n;

int findMinVertex(int key[], int visited[]) {
    int min = INF, minIndex = -1;
    for (int v = 0; v < n; v++) {
        if (!visited[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
}

void primsAlgorithm() {
    int parent[MAX], key[MAX];
    int totalCost = 0;

    for (int i = 0; i < n; i++) {
        key[i] = INF;
        visited[i] = 0;
        parent[i] = -1;
    }

    key[0] = 0;  

    for (int count = 0; count < n - 1; count++) {
        int u = findMinVertex(key, visited);
        if (u == -1) {
            printf("\nGraph is not connected — MST cannot be formed completely.\n");
            return;
        }

        visited[u] = 1;

        for (int v = 0; v < n; v++) {
            
            if (cost[u][v] != INF && !visited[v] && cost[u][v] < key[v]) {
                parent[v] = u;
                key[v] = cost[u][v];
            }
        }
    }

    printf("\nEdges in Minimum Cost Spanning Tree:\n");
    for (int i = 1; i < n; i++) {
        if (parent[i] != -1) {
            printf("%d - %d : %d\n", parent[i] + 1, i + 1, cost[i][parent[i]]);
            totalCost += cost[i][parent[i]];
        }
    }

    printf("\nTotal Minimum Cost of Spanning Tree: %d\n", totalCost);
}

int main() {
    printf("Enter the number of vertices: ");
    scanf("%d", &n);

    if (n <= 0 || n > MAX) {
        printf("Invalid number of vertices. Please enter a number between 1 and %d.\n", MAX);
        return 1;
    }

    printf("Enter the cost adjacency matrix (0 for no edge):\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &cost[i][j]);
            if (cost[i][j] == 0 && i != j)
                cost[i][j] = INF; 
        }
    }

    primsAlgorithm();
    return 0;
}

