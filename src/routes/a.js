const Router = require("koa-router")
const router = new Router()

router.get("/a", ctx => {
  let params = ctx.request.query
  ctx.body = {
    params
  }
})

module.exports = router