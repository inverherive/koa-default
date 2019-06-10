import Router from "koa-router";

export const router = new Router();

router.get("/test", ctx => {
  console.log("Test GET");
  ctx.status = 200;
  ctx.body = {
    status: "success",
    message: "Test Complete"
  };
});

export const errorHandler = ctx => {
  if (ctx.status !== 200) {
    let error = { status: "error" };
    switch (ctx.status) {
      case 404:
        error.message = "route not found";
        break;
      case 504:
        error.message = "method not found";
        break;
      default:
        error.message = "server error";
    }
    ctx.body = { ...error };
  }
};
