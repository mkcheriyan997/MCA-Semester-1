def process_list(lst):
    if not lst:
        print("empty set")
        return
    
    total = 0
    found_int = False
    strings = []
    
    for item in lst:
        try:
            num = int(item)
            total += num
            found_int = True
        except ValueError:
            strings.append(item)
    
    if not found_int:
        print("error")
        print("Strings:", strings)
    else:
        print("Sum:", total)

list1 = input("Enter list items separated by space: ").split()
process_list(list1)

