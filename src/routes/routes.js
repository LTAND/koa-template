const combine = require("koa-combine-routers") // 路由压缩
const aRoutes = require("./a")
const bRoutes = require("./b")

module.exports = combine(
  aRoutes,
  bRoutes
)