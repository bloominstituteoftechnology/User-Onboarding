const express = require('express')
const Todo = require('../helpers')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(Todo.getAll())
})

router.get('/:id', (req, res) => {
  res.json(Todo.getById(req.params.id))
})

router.post('/', (req, res) => {
  res.json(Todo.create(req.body))
})

router.patch('/:id', (req, res) => {
  res.json(Todo.toggleDone(req.params.id))
})

router.delete('/:id', (req, res) => {
  res.json(Todo.remove(req.params.id))
})

module.exports = router
