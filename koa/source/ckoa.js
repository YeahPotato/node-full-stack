const http = require('http')
const context = require('./context')
const response = require('./response')
const request = require('./request')

class Ckoa {
    listen() {
        const server = http.createServer((req, res) => {
            // 创建上下文环境
            const ctx = this.createContext(req, res)

            this.callback && this.callback(ctx)
            res.end(ctx.body)
        })
        
        server.listen(...arguments)
    }

    use(callback) {
        this.callback = callback
    }

    createContext(req, res) {
        const ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)

        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res

        return ctx
    }
}


module.exports = Ckoa