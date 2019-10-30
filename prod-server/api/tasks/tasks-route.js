"use strict";

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.post('/task', function (req, res) {
  res.send('post.task - create a task');
});
router.get('/task', function (req, res) {
  res.send('get.task - get all tasks');
});
router.get('/task/:id', function (req, res) {
  res.send('get.task/:id - get task by id');
});
router.put('/task', function (req, res) {
  res.send('put.task - update a task');
});
router.delete('/task', function (req, res) {
  res.send('delete.task - Delete a task');
});
var _default = router;
exports.default = _default;