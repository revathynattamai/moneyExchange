const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')({ origin: true });
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(express.static('_dist'));

app.options('*', cors);

app.get('/currentExchangeRates', (req, res) => {
  res.send({
    usd: 1,
    gbp: 0.79,
    eur: 0.91,
    // eslint-disable-next-line no-magic-numbers
    inr: [ 70, 71, 72, 73, 74, 75 ][Math.floor(Math.random() * 5) + 1],
  });
});

app.get('/currentCurrencies', (req, res) => {
  res.send({
    usd: 10,
    gbp: 10,
    eur: 10,
    inr: 10,
  });
});

module.exports = app;