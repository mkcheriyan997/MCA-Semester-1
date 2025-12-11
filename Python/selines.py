with open("input.txt", "r") as f:
    for line in f:
        words = line.split()
        if any(w.startswith("s") and w.endswith("e") for w in words):
            print(line.strip())