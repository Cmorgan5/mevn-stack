"use strict";

var _interopRequireWildcard = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./user-controller"));

var router = _express.default.Router();

router.get('/user', controller.index);
var _default = router;
exports.default = _default;