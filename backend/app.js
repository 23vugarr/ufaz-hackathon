const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());


var URL = "https://api.coingecko.com/api/v3/coins/markets"
var PARAMS = {
    "vs_currency": "usd", 
    "per_page": 200, 
    "page": 1,  
    "order": "market_cap_desc" 
};


async function fetchData() {
    const response = await axios.get(URL, {params: PARAMS});
    const data = response.data.map(item => {
        return {
            'id': item.id,
            'symbol': item.symbol,
            'name': item.name,
            'current_price': item.current_price,
            'market_cap': item.market_cap,
            'market_cap_rank': item.market_cap_rank,
            'total_volume': item.total_volume,
            'price_change_24h': item.price_change_24h
        }
    });
    return data;
};



app.get('/top_tokens', (req, res) => {
    fetchData().then(data => {
        res.send(data);
    });
});

app.get('/tokens_gainers', (req, res) => {
    fetchData().then(data => {
        data = data.filter(item => item.price_change_24h > 0);
        res.send(data);
    });
});

app.get('/token/:token_id/price_history', (req, res) => {
    const token_id = req.params.token_id;
    const URL = "https://api.coingecko.com/api/v3/coins/" + token_id + "/market_chart";
    const PARAMS = {
        "vs_currency": "usd",
        "days": 30
    };
    axios.get(URL, {params: PARAMS}).then(response => {
        const data = response.data.prices.map(item => {
            return {
                'time': item[0],
                'price': item[1]
            }
        });
        res.send(data);
    });
});

app.get('/tokens/:token', (req, res) => {
    const token = req.params.token;
    fetchData().then(data => {
        data = data.filter(item => item.symbol.toLowerCase() === token.toLowerCase());
        res.send(data);
    });
});



app.get('/*', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on port 3000!'));