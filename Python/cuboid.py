l1,b1,h1 = map(int,input("Cuboid 1 (l b h): ").split())
l2,b2,h2 = map(int,input("Cuboid 2 (l b h): ").split())
print("Cuboid 1 has smaller volume" if l1*b1*h1 < l2*b2*h2 else "Cuboid 2 has smaller or equal volume")