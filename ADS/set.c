#include <stdio.h>
int findBitSize(int num) {
    int count = 0;
    while (num > 0) {
        count++;
        num /= 2;
    }
    return count;
}

void decimalToBitString(int decimal, int bitSet[], int n) {
    for (int i = n - 1; i >= 0; i--) {
        bitSet[i] = decimal % 2;
        decimal = decimal / 2;
    }
}

void displaySet(int set[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d", set[i]);
    }
    printf("\n");
}

void unionSet(int A[], int B[], int result[], int n) {
    for (int i = 0; i < n; i++) {
        result[i] = A[i] | B[i]; 
    }
}

void intersectionSet(int A[], int B[], int result[], int n) {
    for (int i = 0; i < n; i++) {
        result[i] = A[i] & B[i]; 
    }
}

void differenceSet(int A[], int B[], int result[], int n) {
    for (int i = 0; i < n; i++) {
        result[i] = A[i] & (!B[i]);  
    }
}

int main() {
    int decimalA, decimalB;

    printf("Enter Set A as decimal number: ");
    scanf("%d", &decimalA);

    printf("Enter Set B as decimal number: ");
    scanf("%d", &decimalB);
    int sizeA = findBitSize(decimalA);
    int sizeB = findBitSize(decimalB);
    int n = (sizeA > sizeB) ? sizeA : sizeB;  

    if (n == 0) n = 1; 

    int A[n], B[n], result[n];

    decimalToBitString(decimalA, A, n);
    decimalToBitString(decimalB, B, n);

    int choice;
    while (1) {
        printf("\n--- Set Operations Menu ---\n");
        printf("1. Display Sets\n");
        printf("2. Union (A ∪ B)\n");
        printf("3. Intersection (A ∩ B)\n");
        printf("4. Difference (A - B)\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Set A (bit string): ");
                displaySet(A, n);
                printf("Set B (bit string): ");
                displaySet(B, n);
                break;

            case 2:
                unionSet(A, B, result, n);
                printf("A ∪ B = ");
                displaySet(result, n);
                break;

            case 3:
                intersectionSet(A, B, result, n);
                printf("A ∩ B = ");
                displaySet(result, n);
                break;

            case 4:
                differenceSet(A, B, result, n);
                printf("A - B = ");
                displaySet(result, n);
                break;

            case 5:
                printf("Exiting program...\n");
                return 0;

            default:
                printf("Invalid choice! Please try again.\n");
        }
    }
}

