#wamdpp to OOP of stack --> LIFO

class Queue:
	def __init__(self):
		self.data = []
	
	def en(self,ele):
		self.data.append(ele)
		print(ele," is pushed on the stack ")

	def de(self):
		if len(self.data) == 0:
			return " queue is empty"
		else:
			return self.data.pop(0)
		
	def show(self):
		print(self.data)


q = Queue()
while True:
	op=int(input("1 enq , 2 de , 3 show, 4 exit "))
	if op ==1:
		ele = int(input("enter element to enq "))
		q.en(ele)
	elif op==2:
		print(q.de())
	elif op == 3:
		q.show()
	elif op == 4:
		break
	else:
		print("sorry i dont understans")



 