def print_factors(n):
    if n <= 0:
        print("Please enter a positive integer greater than zero.")
        return
    print(f"Factors of {n} are:")
    for i in range(1, n + 1):
        if n % i == 0:
            print(i, end=' ')
    print()

try:
    num = int(input("Enter a positive integer: "))
    print_factors(num)
except ValueError:
    print("Invalid input! Please enter a valid integer.")

