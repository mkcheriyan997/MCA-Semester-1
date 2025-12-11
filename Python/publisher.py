class Book:
    def __init__(s, t, a): s.t, s.a = t, a
    def show(s): print(f"{s.t} by {s.a} is published by {s.p}" if hasattr(s, 'p') else 'Unknown Publisher')

b = Book(input("Title: "), input("Author: "))
if input("Add publisher? y/n: ") == 'y': b.p = input("Publisher: ")
b.show()