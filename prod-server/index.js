"use strict";

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

// const express = require('express')
var app = (0, _express.default)();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});