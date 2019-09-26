const Koa = require('koa')
const static = require('koa-static')
const router = require('koa-router')()
const app = new Koa()

router.get('/html', async (ctx, next) => {
    ctx.body = 'string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        name: "joke2",
        age: 18
    }
})

app.use(router.routes())
app.use(static(__dirname + '/static'))


app.listen(4569)
