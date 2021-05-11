const express = require('express');
const uuid = require('uuid').v4;
const cors = require('cors');
const app = express();

// ==============================================

const port = process.env.PORT || 5000;

// ==============================================

app.use(express.json());
app.use(cors());

// ==============================================

const friends = [
  {
    id: uuid(),
    name: 'Michael',
    age: 'student',
    email: 'michael@michael.com',
    civil: 'single',
    hobbies: [
      'hiking',
      'reading',
      'coding',
    ],
  },
  // name: '',                // text
  // age: '',                 // number
  // email: '',               // text
  // password: '',            // text
  // terms_of_service: false, // checkbox
  // radio: null,             // radio
  // check1: false,           // checkbox
  // check2: false,           // checkbox
  // drop: ''                 // dropdown
];

// ==============================================

app.get('/friends/:id', (req, res) => {
  const friend = friends.find(fr => fr.id === req.params.id)
  if (!friend) {
    res.status(404).json({ message: 'No such friend!' })
  }
  else {
    res.json(friend)
  }
});

// ==============================================

app.get('/friends', (req, res) => {
  res.json(friends)
});

// ==============================================

app.post('/friends', (req, res) => {
  const { name, email, age, civil } = req.body
  const requiredFields = { name, email, age, civil }

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
});

// ==============================================

app.listen(port, () => {
  console.log(`listening on ${port}`)
});

// ==============================================