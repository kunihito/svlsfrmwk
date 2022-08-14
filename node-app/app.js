const express = require('express');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const serverless = require('serverless-http');

const apiRoutes = require('./routes/v1');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// v1 api routes
app.use('/api/v1', apiRoutes);

module.exports = app;
// module.exports.handler = serverless(app);
