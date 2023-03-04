import requests
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://0.0.0.0",
    "http://0.0.0.0:3000",
    "http://0.0.0.0:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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



@app.get("/token/{token_id}/price_history/")
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