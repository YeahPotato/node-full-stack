const fs = require("fs")

const rs = fs.createReadStream('./test.png')
const ws = fs.createWriteStream('./a.png')

rs.pipe(ws)
