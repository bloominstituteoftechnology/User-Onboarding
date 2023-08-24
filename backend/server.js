const express = require('express')
const cors = require('cors')
const path = require('path')
const picsRouter = require('./routers/pics')
const todosRouter = require('./routers/todos')

const PORT = process.env.PORT || 9009

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../dist')))

server.use(cors())

server.use('/api/todos', todosRouter)

server.use('/api/pics', picsRouter) // TODO: this router is not mocked in MSW

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.path} does not exist`,
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
