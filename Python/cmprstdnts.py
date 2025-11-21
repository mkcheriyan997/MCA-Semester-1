s1_name, s1_perc = input("Name1: "), (int(input("M1: "))+int(input("C1: ")))/2
s2_name, s2_perc = input("Name2: "), (int(input("M2: "))+int(input("C2: ")))/2
print(f"{s1_name} > {s2_name}" if s1_perc > s2_perc else f"{s2_name} > {s1_name}" if s2_perc > s1_perc else "Equal")
