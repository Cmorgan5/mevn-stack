"use strict";

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

// const express = require('express')
var app = (0, _express.default)();
(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);
var port = 3000;
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode.');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist'
    });
  }
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!") + process.env.NODE_ENV + 'mode!');
});