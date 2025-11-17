n=int(input("Enter a Number"))
a,b=0,1
result=[]
if(n<=0):
	print("Error Value: Please enter a positive integer.")
else:
	for i in range (n):
		result.append(a)
		a, b = b, a + b	
	print(f"The first {n} terms are: {result}")
	nth_term = result[-1]
	print(f"The {n}-th term is: {nth_term}")
