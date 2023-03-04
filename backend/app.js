const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Main Page');
});


app.get('/top_gainers', (req, res) => {
    axios.get('http://localhost:8000/top_gainers')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/tokens/:token', (req, res) => {
    axios.get('http://localhost:8000/tokens/' + req.params.token)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/token/:token_id/price_history/', (req, res) => {
    axios.get('http://localhost:8000/token/' + req.params.token_id + '/price_history/')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/top_tokens', (req, res) => {
    axios.get('http://localhost:8000/top_tokens')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get

app.get('/*', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on port 3000!'));