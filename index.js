const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 9090
const db = require('./queries')

var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, and Postgres API'
  })
})

app.get('/users', db.getUsers)
app.get('/users/id:id', db.getUserById)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})