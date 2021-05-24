const express = require('express')
const app = express()

// const port = 3000

// app.listen(port, () => console.log(`http://localhost:${port}`))

app.get('/api', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    test: 'api'
  })
})

app.get('/api/test', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    test: 'test'
  })
})

module.exports = app
