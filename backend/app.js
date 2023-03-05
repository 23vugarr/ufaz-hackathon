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
    res.send([1.06])
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

app.get('/tokens/:token/price_prediction', (req, res) => {
    url = "http://localhost:8080/tokens/" + req.params.token + "/price_prediction";
    axios.get(url).then(response => {
        console.log(response.data.prediction)
        res.send(response.data.prediction);
    });
});


// create a list
var wallets = ["0xdd92062adf9f6edf528babe7f04804fe86424a74", "0xdf367477c5e596af88e8797c3cde8e28854cb79c", "0x1a4c1d3d766fa0f0c961a1c4da721a2a6bc5d920", "0xfa52387d626109c1b2c103ec85f8f8124a8d31b6", "0x4c0b801d56d7245ab67f0d7f4773456dd2c689dd", "0xf89ebfa55385f1aef401d5dc5ee761569e45874e", "0x7122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0", "0x5c6428181b9b34df8c1f2af7718f03cacc79d183", "0xbd2b92bf7b37e1e3e44b263b0901445485ee1578", "0xf708e1540697788fe5b02393398f80afc9b81783"]

app.get('/top_addresses', (req, res) => {
    api_key_wallets = 'APH4CYHTAGXCF1M2GZ4UJJ433CEW3T6QTY'
    var result = []
    for(i = 0; i < wallets.length; i++){
        url = `https://api.etherscan.io/api?module=account&action=balance&address=${wallets[i]}&tag=latest&apikey=${api_key_wallets}`
        axios.get(url).then(response => {
            console.log(response.data.result, wallets[i])
            result.push([response.data.result, wallets[i]])
        });
    }
    // result = result.sort(function(a, b){return b-a});
    res.send(result);
});


app.get('/*', (req, res) => {
    res.send('404 error');
});

app.listen(1337, () => console.log('Listening on port 1337!'));