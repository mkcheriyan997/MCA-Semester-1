words = ['abc', 'xyz', 'aba', '1221', 'madam', 'a']
count = sum(1 for word in words if len(word) >= 2 and word[0] == word[-1])
print(f"Number of matching strings: {count}")
