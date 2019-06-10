import { PORT } from "dotenv";
import Koa from "koa";
import { router, errorHandler } from "./routes/index";
const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default server;
