const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const { url, method, headers } = req
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
            res.end(data)
        })
    } else if (url === '/user' && method === 'GET') {
        res.writeHead(200, { 'Content-type': 'application/json' })

        res.end(JSON.stringify({ name: "joke" }))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream(`.${url}`).pipe(res)
    }
})
server.listen('5623')


function getPrototypeChain(obj) {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }

    protoChain.push(null)
    return protoChain
}