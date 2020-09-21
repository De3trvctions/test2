const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const db = require('./queries')


var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response, next) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
    next();
})

// app.get('/users', db.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
