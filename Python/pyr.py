def print_pyramid(rows):
    for i in range(1, rows + 1):
        print(' ' * (rows - i), end='')
        print('*' * (2 * i - 1))
num_rows = int(input("Enter the number of rows: "))
print_pyramid(num_rows)

