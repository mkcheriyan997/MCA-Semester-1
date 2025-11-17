my_list = [1, 2, 5, 8, 2, "apple"]
item_str = input("Enter item: ")
try:
	item = int(item_str)
except ValueError:
	item = item_str
print(f"Found {my_list.count(item)} time(s).")

