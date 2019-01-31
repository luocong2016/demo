const path = require('path')
const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const staticFiles = require('koa-static')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

router.get('/', (ctx, next) => {yar
  ctx.body = 'hello koa'
})

router.get('/abc', async ctx => {
  await ctx.render('index', {
    title: 'hello koa2'
  })
})

router.get('/product/:aid', async ctx => {
  ctx.body = ctx.params
})

router.get('/newscontent', (ctx, next) => {
  const { url, request, query: ctx_query, querystring: ctx_querystring } = ctx
  const { query: req_query, querystring: req_querystring } = request

  ctx.body = {
    url,
    ctx_query,
    ctx_querystring,
    req_query,
    req_querystring
  }
})
app.use(bodyParser())
app.use(staticFiles(path.resolve(__dirname, "./public")))
app.use(async (ctx, next) => {
  ctx.state.userinfo = 'lutz'
  await next()
})
app.use(views('src/views', { extension: 'ejs' }))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`stating at port 3000`)
})
