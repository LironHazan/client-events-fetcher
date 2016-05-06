'use strict';

const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.use('/server', router);
//app.use('/', router);
// define routes later

app.use(express.static(path.join(__dirname , '../client')));
//app.use(express.static(path.join(__dirname, '..')));

module.exports = app;
