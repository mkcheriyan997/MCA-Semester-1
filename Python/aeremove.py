with open("input.txt", "r+") as f:
    lines = [line for line in f if not any(w.startswith("a") and w.endswith("e") for w in line.split())]
    f.seek(0)
    f.truncate()
    f.writelines(lines)
