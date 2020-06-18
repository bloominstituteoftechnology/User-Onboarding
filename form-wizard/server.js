const express = require('express')
const uuid = require('uuid').v4
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const friends = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
    civil: 'Single',
    hobbies: [
      'hiking',
      'reading',
      'coding',
    ],
  },
]

app.get('/friends/:id', (req, res) => {
  const friend = friends.find(fr => fr.id === req.params.id)
  if (!friend) {
    res.status(404).json({ message: 'No such friend!' })
  }
  else {
    res.json(friend)
  }
})

app.get('/friends', (req, res) => {
  res.json(friends)
})

app.post('/friends', (req, res) => {
  const { username, email, role, civil } = req.body
  const requiredFields = { username, email, role, civil }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    res.status(400).json({ message: 'Some required fields are missing or invalid.' })
  }
  else {
    const newFriend = { id: uuid(), ...req.body }
    friends.push(newFriend)
    res.status(200).json(newFriend)
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
