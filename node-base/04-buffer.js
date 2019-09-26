const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('abc')
console.log(buf2.toString())

const buf3 = Buffer.concat([buf2,buf1])
console.log(buf3.toString)