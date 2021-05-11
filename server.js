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
    name: 'Friend 1',
    age: '47',
    email: 'steve@apple.com',
    password: 'pwd',
    terms_of_service: false,
    checkboxes: [
      'check1',
      'check2'
    ],
    radio: 'radio2',
    drop: 'drop3'
  },
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
  const { name, terms_of_service, radio } = req.body;
  const requiredFields = { name, terms_of_service, radio };

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    res.status(400).json({ message: 'Some required fields are missing or invalid.' });
  }
  else if (req.body.checkboxes && !Array.isArray(req.body.checkboxes)) {
    res.status(400).json({ message: 'The optional `checkboxes` field must be an array.' });
  }
  else {
    const newFriend = { id: uuid(), ...req.body };
    
    console.log('newFriend: ', newFriend);
    friends.push(newFriend);
    console.log('friends: ', friends);

    res.status(200).json(friends)
  }
});

// ==============================================

app.listen(port, () => {
  console.log(`listening on ${port}`)
});

// ==============================================