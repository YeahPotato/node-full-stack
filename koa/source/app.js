const Ckoa = require('./ckoa')
const app = new Ckoa()

// app.use((req, res) => {
//     res.writeHead(200)
//     res.end('hi ckoa')
// })

// app.use(ctx=>{
//     ctx.body = 'haha'
// })

app.use(async (ctx, next) => {
    ctx.body = '1'
    await next()
    ctx.body += '2'
})

app.use(async (ctx, next) => {
    ctx.body += '3'
    await next()
    ctx.body += '4'
})

app.use(async (ctx, next) => {
    ctx.body += '5'
})

// html output 13542

app.listen(7894)