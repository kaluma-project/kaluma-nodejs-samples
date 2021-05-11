const express = require('express')
const ip = require('ip');
const app = express()

const addr = ip.address();
const port = 3000
const html = `
<html>
  <head></head>
  <body>
    <h1>{{t}}℃</h1>
    <h2>{{h}}%</h2>
  </body>
</html>
`

let temperature = '0.0'
let humidity = '0'

app.get('/update', (req, res) => {
  temperature = req.query.t
  humidity = req.query.h
  res.status(200).send('OK')
})

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.send(html
    .replace('{{t}}', temperature)
    .replace('{{h}}', humidity))
})

app.listen(port, () => {
  console.log(`App listening at http://${addr}:${port}`)
})
