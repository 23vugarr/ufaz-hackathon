import requests

url = 'https://api.coingecko.com/api/v3/coins/markets'

params = {
    'vs_currency': 'usd',
    'order': 'market_cap_desc',
    'per_page': '10'
}

response = requests.get(url, params=params)

data = response.json()

for coin in data:
    name = coin['name']
    price = coin['current_price']
    print(f"{name}: {price}")
