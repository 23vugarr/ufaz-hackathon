from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM

import numpy as np
import pandas as pd
df = pd.read_csv('data1.csv')
df = df[['UnixTimestamp', 'CurrentValue @ $1563.21/Eth']]
dates = df['UnixTimestamp'].tolist()
prices = df['CurrentValue @ $1563.21/Eth'].tolist()
dates = np.array(dates)
prices = np.array(prices)
input_seq = prices[:-1]
output_seq = prices[1:]
window_size = 3

def create_pairs(input_seq, output_seq, window_size):
    input_pairs = []
    output_pairs = []
    for i in range(len(input_seq) - window_size):
        input_pairs.append(input_seq[i:i+window_size])
        output_pairs.append(output_seq[i+window_size])
    return np.array(input_pairs), np.array(output_pairs)

x_train, y_train = create_pairs(input_seq, output_seq, window_size)


model = Sequential()
model.add(LSTM(50, activation='relu', input_shape=(window_size, 1)))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mse')
model.compile(optimizer='adam', loss='mse')
model.fit(x_train, y_train, epochs = 10)


def predict_sequence(model, input_seq, window_size, num_predictions):
    output_seq = input_seq[-window_size:]
    for i in range(num_predictions):
        input_seq = np.append(input_seq, output_seq[-window_size:])
        output = model.predict(input_seq[-window_size:].reshape(1,-1))
        output_seq = np.append(output_seq, output)
    return output_seq


num_predictions = 5
forecast = predict_sequence(model, input_seq, window_size, num_predictions)

future_dates = np.array(['2023-02-27', '2023-02-28', '2023-03-01', '2023-03-02', '2023-03-03'])
print('Predicted prices for the next 5 days:')
for date, price in zip(future_dates, forecast[-num_predictions:]):
    print(date, ':', price)
