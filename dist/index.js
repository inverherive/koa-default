"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const Koa = require("koa");
const routes = require("./routes/index");

const app = new _koa.default();
const PORT = 1337;
app.use(routes.router.routes()).use(routes.router.allowedMethods()).use(routes.errorHandler);
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
var _default = server; //module.exports = server;

exports.default = _default;