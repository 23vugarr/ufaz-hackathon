import requests
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from aiohttp import ClientSession
app = FastAPI()


origins = [ 
    "http://localhost:3000",
    "http://localhost:1337",
    "http://localhost:8000",
    "http://localhost:*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model('./model/testmodel.h5')

URL = "https://api.coingecko.com/api/v3/coins/markets"
PARAMS = {
    "vs_currency": "usd", 
    "per_page": 200, 
    "page": 1,  
    "order": "market_cap_desc" 
}


def fetch_data(url: str) -> pd.DataFrame:
    response = requests.get(url, params=PARAMS)
    data = response.json()
    data = pd.DataFrame(data)
    return data[['id', 'symbol', 'name', 'current_price', 'market_cap', 'market_cap_rank', 'total_volume', 'price_change_24h']]



@app.get("/tokens/{token_id}/price_history/")
async def read_item(token_id: str, days: int = 10):
    url = f"https://api.coingecko.com/api/v3/coins/{token_id}/market_chart?vs_currency=usd&days={days}"
    response = requests.get(url)
    data = response.json()
    prices = data['prices']
    df = pd.DataFrame(prices, columns=['time', 'price'])
    df['time'] = pd.to_datetime(df['time'], unit='ms')
    return df.to_dict(orient='records')


@app.get("/top_tokens")
async def read_root():
    df = fetch_data(URL)
    top_tokens = df.to_dict(orient='records')
    return {"top_tokens": top_tokens}



@app.get("/top_gainers")
async def read_root():
    df = fetch_data(URL)
    top_gainers = df.sort_values(by='price_change_24h', ascending=False).head(10).to_dict(orient='records')
    return {"top_gainers": top_gainers}



@app.get("/tokens/{token_id}")
async def read_item(token_id: str):
    df = fetch_data(URL)
    token = df[df['id'] == token_id].to_dict(orient='records')
    return {"token": token}


def predict_sequence(model, input_seq, window_size, num_predictions):
    output_seq = input_seq[-window_size:]
    for i in range(num_predictions):
        input_seq = np.append(input_seq, output_seq[-window_size:])
        output = model.predict(input_seq[-window_size:].reshape(1,-1))
        output_seq = np.append(output_seq, output)
    return output_seq


@app.get("/tokens/{token_id}/price_prediction")
async def read_item(token_id: str, days: int = 20):
    url = f"https://api.coingecko.com/api/v3/coins/{token_id}/market_chart?vs_currency=usd&days={days}"
    try:
        async with ClientSession() as session:
            async with session.get(url) as response:
                data = await response.json()
                
        prices = data['prices']
        df = pd.DataFrame(prices, columns=['time', 'price'])
        prediction = predict_sequence(model, np.array(df['price'].values), 3, 0)
        return {"prediction": prediction.tolist()}   
    except:
        return {"prediction": [0, 0, 0]}



# @app.get("/top_balances")
# async def read_root():
#     URL = f'https://api.etherscan.io/api?module=account&action=tokentx&address={address}&startblock=0&endblock=99999999&sort=desc&apikey={api_key}'

#     return {"top_balances": top_balances}
