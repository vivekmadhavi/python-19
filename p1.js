import pandas as pd

data = pd.read_csv("amit.csv")
print(data)
print(data.shape)
i = data.shape
rows = i[0]
cols = i[1]

print("rows = " , rows)
print("rows = " , cols)

print(data.head())
print(data.head(3))

print(data.tail())
print(data.tail(2))

print(data[1:4])
print(data[4:1:-1])