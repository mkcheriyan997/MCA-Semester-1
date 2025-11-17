class Engine:
    def __init__(s, p): 
        s.__p = p
    def show(s): 
        print("Power:", s.__p)

class Wheels:
    def __init__(s, sz): 
        s.__sz = sz
    def show(s): 
        print("Wheel Size:", s.__sz)

class Car(Engine, Wheels):
    def __init__(s, m, p, sz): 
        Engine.__init__(s, p)
        Wheels.__init__(s, sz)
        s.__m = m
    def show(s): 
        print("Model:", s.__m)
        super().show()
        Wheels.show(s)

print("Enter The Details Given Below\n")
m = input("Model: ")
p = input("Power: ")
sz = input("Wheel Size: ")

print("\nVehicle Specifications\n")
Car(m, p, sz).show()

