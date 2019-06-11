import Router from "koa-router";
import { createImage } from "../controllers/map_image.js";
export const router = new Router();

router.get("/test", ctx => {
  ctx.status = 200;
  ctx.body = {
    status: "success",
    message: "Test Complete"
  };
});
router.get("/mapImage/:left/:bottom/:right/:top", ctx => {
  ctx.type = "image/png";
  ctx.body = createImage(ctx.params);
});

router.post("/mapImage", ctx => {
  ctx.type = "image/png";
  ctx.body = createImage(ctx.request.body.extent);
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
