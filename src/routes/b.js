const Router = require("koa-router")
const router = new Router()

router.post("/b", ctx => {
  let { body } = ctx.request
  console.log("body", body)
  ctx.body = {
    ...body
  }
})

module.exports = router