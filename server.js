const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes/index');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json({ type: 'application/json' }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

module.exports = app;