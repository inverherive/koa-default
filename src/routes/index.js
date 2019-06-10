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
  let error = { status: "error" };
  switch (ctx.status) {
    case 404:
      error.message = "route not found";
      ctx.body = { ...error };
      break;
    case 504:
      error.message = "method not found";
      ctx.body = { ...error };
      break;
  }
};

module.exports = { router, errorHandler };