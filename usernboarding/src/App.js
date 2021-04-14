import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Users from './Components/Users.js';
import Footer from './Components/Footer.js';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    terms: false,
    password: '',
  });
  return (
    <div className='App'>
      <Users users={users} user={user} />
      <Footer user={user} setUser={setUser} />
    </div>
  );
};
export default App;
