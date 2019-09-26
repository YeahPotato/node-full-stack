/**
* @func {Fun}
* @desc {desc} express简易实现
* @param {param} type desc
* @returns
*/

const express = require('./cexpress')
const app = express()

app.get('/', (req, res) => {
    res.end('hello world')
})

app.get('/users', (req, res) => {
    res.end(JSON.stringify([{ name: "joke", age: 18 }]))
})
// 捕获异常
process.on('uncaughtException',err=>{
    console.log('err',err)
})

app.listen(1234,()=>{
    console.log('Example app listen at 3000')
})