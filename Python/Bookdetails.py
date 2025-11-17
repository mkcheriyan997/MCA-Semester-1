class Pub:
    def __init__(s,n):
    	s.n=n
    def show(s):
    	print("Pub:",s.n)
class Book(Pub):
    def __init__(s,n,t,a):
    	super().__init__(n);
    	s.t,s.a=t,a
    def show(s):	
    	super().show();
    	print("Title:",s.t,"Author:",s.a)
class Py(Book):
    def __init__(s,n,t,a,p,pg):
    	super().__init__(n,t,a);
    	s.p,s.pg=p,pg
    def show(s):
    	super().show();
    	print("Price:",s.p,"Pages:",s.pg)

n=input("Publisher:");
t=input("Title:");
a=input("Author:")
p=int(input("Price:"));
pg=int(input("Pages:"))
Py(n,t,a,p,pg).show()
