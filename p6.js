#wapp to implement DS : stack --> LTFO


queue = []
while True:
	op=int(input("1 en , 2 de , 3 show, 4 exit "))
	if op ==1:
		ele = int(input("enter element to en "))
		queue.append(ele)
		print(ele,"is enq on the queue")
	elif op==2:
		if len(queue) == 0:
			print("stack is empty")
		else:
			print("deq element " , queue.pop(0))
	elif op == 3:
		print(queue)
	elif op == 4:
		break
	else:
		print("sorry i dont understans")