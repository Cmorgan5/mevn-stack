"use strict";

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.post('/user', function (req, res) {
  res.send('get.user - get all users');
});
var _default = router;
exports.default = _default;