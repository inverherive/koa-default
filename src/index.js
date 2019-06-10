const Koa = require("koa");
const routes = require("./routes/index");
const app = new Koa();
const PORT = 1337;

app
  .use(routes.router.routes())
  .use(routes.router.allowedMethods())
  .use(routes.errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
