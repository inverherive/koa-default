"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Router = require("koa-router");

const router = new Router();
router.get("/test", ctx => {
  console.log("Test GET");
  ctx.status = 200;
  ctx.body = {
    status: "success",
    message: "Test Complete"
  };
});

const errorHandler = ctx => {
  let error = {
    status: "error"
  };

  switch (ctx.status) {
    case 404:
      error.message = "route not found";
      ctx.body = _objectSpread({}, error);
      break;

    case 504:
      error.message = "method not found";
      ctx.body = _objectSpread({}, error);
      break;
  }
};

module.exports = {
  router,
  errorHandler
};