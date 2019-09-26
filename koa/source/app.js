const Ckoa = require('./ckoa')
const app = new Ckoa()

// app.use((req, res) => {
//     res.writeHead(200)
//     res.end('hi ckoa')
// })

app.use(ctx=>{
    ctx.body = 'haha'
})
app.listen(7894)