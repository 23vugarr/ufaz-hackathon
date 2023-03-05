const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());


var URL = "https://api.coingecko.com/api/v3/coins/markets/"
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
        data = data.sort((a, b) => b.price_change_24h - a.price_change_24h);
        res.send(data);
    });
});

// token_id: bitcoin, ethereum, etc.
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

// btc, eth or etc.
app.get('/tokens/:token', (req, res) => {
    const token = req.params.token;
    fetchData().then(data => {
        data = data.filter(item => item.symbol.toLowerCase() === token.toLowerCase());
        res.send(data);
    });
});

app.get('/get_balance', (req, res) => {
    res.send([1.05])
});

app.get('/get_balance_azn', (req, res) => {
    res.send([5])
});


app.get('/transfer', (req, res) => {
    res.send(1.05);
});

app.post('/transfer', (req, res) => {
    // connect testnet wallet and send money
    res.sendStatus(200);
});

app.get('/trade', (req, res) => {
    res.send(1.05);
});

app.get('/*', (req, res) => {
    res.send('Hello World');
});

app.listen(1337, () => console.log('Listening on port 1337!'));