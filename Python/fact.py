n=int(input("Enter a Number"))
f=1
if n<0:
	print("Error Value")
else:
	for i in range(1,n+1):
		f*=i
	print("Factorial=",f)
