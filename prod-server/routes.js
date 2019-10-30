"use strict";

var _interopRequireDefault = require("/Users/production/mevn-stack/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoute = _interopRequireDefault(require("./api/tasks/tasks-route"));

var _registerRoutes = _interopRequireDefault(require("./api/register/register-routes"));

var _userRoutes = _interopRequireDefault(require("./api/user/user-routes"));

var _authRoutes = _interopRequireDefault(require("./api/auth/auth-routes"));

function registerRoutes(app) {
  app.use('/api', _tasksRoute.default);
  app.use('/api', _registerRoutes.default);
  app.use('/api', _userRoutes.default);
  app.use('/api', _authRoutes.default);
}