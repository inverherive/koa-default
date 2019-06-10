"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _index = require("./routes/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

const app = new _koa.default();
app.use(_index.router.routes()).use(_index.router.allowedMethods()).use(_index.errorHandler);
const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
var _default = server;
exports.default = _default;