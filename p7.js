#wamdpp to OOP of stack --> LIFO

class Stack:
	def __init__(self):
		self.data = []
	
	def push(self,ele):
		self.data.append(ele)
		print(ele," is pushed on the stack ")

	def pop(self):
		if len(self.data) == 0:
			return " stack is empty"
		else:
			return self.data.pop()
		
	def show(self):
		print(self.data)


s = Stack()
while True:
	op=int(input("1 push , 2 pop , 3 show, 4 exit "))
	if op ==1:
		ele = int(input("enter element to push "))
		s.push(ele)
	elif op==2:
		print(s.pop())
	elif op == 3:
		s.show()
	elif op == 4:
		break
	else:
		print("sorry i dont understans")



 