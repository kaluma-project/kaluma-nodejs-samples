var ip = require('ip');
const aedes = require('aedes')()

const address = ip.address()
const server = require('net').createServer(aedes.handle)
const port = 1883

server.listen(port, function () {
  console.log(`server started and listening on ${address}:${port}`)
})
