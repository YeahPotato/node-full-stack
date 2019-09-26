const os = require('os')
const util = require('util')
const cpuStat = require('cpu-stat')
const getCpu = util.promisify(cpuStat.usagePercent)
     
const showStat = async () => {
    const mem = os.freemem() / os.totalmem() * 100
    console.log(`内存占用${mem}`)

    const percent = await getCpu()
    console.log(percent.toFixed(2) + '%')
}

module.exports = {
    showStat
}