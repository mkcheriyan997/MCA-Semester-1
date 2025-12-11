n, r = input("Name: "), input("Roll: ")
m_s, m_t = int(input("Maths Secured: ")), int(input("Maths Total: "))
c_s, c_t = int(input("Comp Secured: ")), int(input("Comp Total: "))
total_s, total_t = m_s + c_s, m_t + c_t
perc = (total_s / total_t) * 100 if total_t > 0 else 0
print(f"Name:{n}, Roll:{r}, Total:{total_s}/{total_t}, Perc:{perc:.2f}%, Result:{'Pass' if perc >= 50 else 'Fail'}")
