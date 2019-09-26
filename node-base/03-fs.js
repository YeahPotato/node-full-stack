const fs = require('fs')
const path = require('path')

// 同步读取
const data = fs.readFileSync(path.resolve(__dirname,'./index.js'))
console.log(data.toString())

// 异步读取
fs.readFile(path.resolve(__dirname,'./index.js'),(err, data) => {
    console.log(data.toString())
})

// 防止 node ./node-base/fs.js 执行报错  路径取绝对路径