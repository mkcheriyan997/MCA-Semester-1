class Person:
    def __init__(s,n,a): s.n,s.a=n,a
    def display(s): print("Name:",s.n,"Age:",s.a)

class Employee(Person):
    def __init__(s,n,a,e): super().__init__(n,a); s.e=e
    def display(s): super().display(); print("EmpID:",s.e)

class Faculty(Employee):
    def __init__(s,n,a,e,d): super().__init__(n,a,e); s.d=d
    def display(s): super().display(); print("Dept:",s.d)

class Researcher:
    def can_do_research(s): return "Can conduct research"

class Professor(Faculty,Researcher): pass

# ----- Input -----
n=input("Name: ")
a=input("Age: ")
e=input("EmpID: ")
d=input("Department: ")

# ----- Output -----
p=Professor(n,a,e,d)
p.display()
print(p.can_do_research())

