#wapp to vix the score

import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("amit.csv")
subjects = data["subjects"].tolist()
score = data["score"].tolist()

print(subjects)
print(score)

plt.bar(subjects , score , width=0.5, color=["red","green","blue"])
plt.xlabel("Subjects")
plt.ylabel("Score")
plt.title("amit performance")
plt.savefig("amit.pdf")
plt.show()