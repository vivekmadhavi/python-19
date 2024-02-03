#wapp to implement DS : stack --> LTFO


stack = []
while True:
	op=int(input("1 push , 2 pop , 3 show, 4 exit "))
	if op ==1:
		ele = int(input("enter element to push "))
		stack.append(ele)
		print(ele,"is pushed on thestack")
	elif op==2:
		if len(stack) == 0:
			print("stack is empty")
		else:
			print("popped element " , stack.pop())
	elif op == 3:
		print(stack)
	elif op == 4:
		break
	else:
		print("sorry i dont understans")