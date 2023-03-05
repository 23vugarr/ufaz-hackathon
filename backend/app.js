// initialize express
const express = require('express');
const app = express();

// initialize side modules
const bodyParser = require('body-parser');
const axios = require('axios');
const cache = require('node-cache');
const myCache = new cache();
const cors = require("cors");
const mysql = require('mysql2');

app.use(cors());
app.use(bodyParser.json());

// initialize mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ufaz_hackathon'
});

db.connect(function(err) {
    if (err) {
        console.error('error connecting:');
        return;
    }
});


// fetch data from coingecko api
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



// routes

app.get('/login', (req, res) => {
    const name = req.query.name;
    const password = req.query.password;
    console.log(name, password)
    const query = "SELECT * FROM users WHERE name = ? AND password = ?";
    db.query(query, [name, password], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            console.log(result)
            res.send(result);
        } else {
            console.log('Wrong username/password combination!')
            res.send();
        }
    });
});


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
    try {
        axios.get(URL, {params: PARAMS}).then(response => {
            const data = response.data.prices.map(item => {
                return {
                    'time': item[0],
                    'price': item[1]
                }
            });
            res.send(data);
        });}
    catch (error) {
        console.log(error);
    }
});


// token_id: bitcoin, ethereum, etc.
app.get('/tokens/:token', async (req, res) => {
    const symbol = req.query.symbol.toLowerCase();
    const cachedData = myCache.get(symbol);
    if (cachedData) {
        return res.send(cachedData);
    }
    const data = await fetchData();
    const filteredData = data.filter(item => item.symbol.toLowerCase() === symbol);
    myCache.set(symbol, filteredData, 60 * 60); // cache for 1 hour
    res.send(filteredData);
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


app.get('/top_addresses', (req, res) => {
    const api_key_wallets = 'APH4CYHTAGXCF1M2GZ4UJJ433CEW3T6QTY'
    const wallets = ["0xdd92062adf9f6edf528babe7f04804fe86424a74", "0xdf367477c5e596af88e8797c3cde8e28854cb79c", "0x1a4c1d3d766fa0f0c961a1c4da721a2a6bc5d920", "0xfa52387d626109c1b2c103ec85f8f8124a8d31b6", "0x4c0b801d56d7245ab67f0d7f4773456dd2c689dd", "0xf89ebfa55385f1aef401d5dc5ee761569e45874e", "0x7122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0", "0x5c6428181b9b34df8c1f2af7718f03cacc79d183", "0xbd2b92bf7b37e1e3e44b263b0901445485ee1578", "0xf708e1540697788fe5b02393398f80afc9b81783"]

    const balanceRequests = wallets.map(wallet => {
        const url = "https://api.etherscan.io/api?module=account&action=balance&address=" + wallet + "&tag=latest&apikey=" + api_key_wallets
        return axios.get(url)
    })

    Promise.all(balanceRequests).then(responses => {
        var result = responses.map(response => [response.data.result, response.config.url.split('address=')[1].split('&')[0]])
        result = result.map(item => {
            return {
                'balance': item[0],
                'address': item[1]
            }
        });
        console.log(result)
        res.send(result);
    }).catch(error => {
        console.log(error)
        res.sendStatus(500);
    })
});



app.get('/*', (req, res) => {
    res.send('404 error');
});


app.listen(1337, () => console.log('Listening on port 1337!'));