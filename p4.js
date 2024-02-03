import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("sahil.csv")
activity = data["activity"].tolist()
hours = data["hours"].tolist()

print(activity)
print(hours)

plt.pie(hours, labels=activity, autopct="%.2f%%",explode=[0,0,0,0.2,0], shadow=True)
plt.show()