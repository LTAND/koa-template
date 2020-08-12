const Koa = require("koa")
const cors = require("@koa/cors")  // 跨域
const koaBody = require("koa-body")
const helmet = require("koa-helmet")
const static = require("koa-static")
const path = require("path")
const compose = require("koa-compose") // 中间件的整合
const compress = require("koa-compress") // 压缩传输

const app = new Koa()
const router = require("./src/routes/routes")

const middleware = compose([
  koaBody(),
  cors(),
  static(path.join(__dirname, "/public")), 
  helmet(),
])

app.use(middleware)
app.use(router())
// app.use(compress()) 生成环境使用
app.listen(3000)
console.log("http://localhost:3000")