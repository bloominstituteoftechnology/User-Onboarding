const express = require('express')
const uuid = require('uuid').v4
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const friends = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'student',
    civil: 'single',
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
  else if (req.body.hobbies && !Array.isArray(req.body.hobbies)) {
    res.status(400).json({ message: 'The optional `hobbies` field must be an array.' })
  }
  else {
    const newFriend = { id: uuid(), ...req.body }
    
    console.log('newFriend: ', newFriend);
    
    friends.push(newFriend);
    console.log('friends: ', friends);

    res.status(200).json(newFriend)
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
