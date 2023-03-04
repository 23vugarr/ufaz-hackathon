import requests
import json
import pandas as pd


def fetch_data():
    url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cripple%2Ctether%2Cbinancecoin%2Clitecoin%2Ccardano%2Cpolkadot%2Cchainlink%2Cstellar&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    response = requests.get(url)
    data = response.json()

    df = pd.DataFrame(data)

    df.to_csv('data.csv', index=False)

    return df