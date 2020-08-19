import React, { useState } from 'react';

import Form from './form';
import Users from './users';
import './App.css';

function App() {

  //in app we set up state as an empty array that eventually contains user data in the form of objects which contain data for each user
  //we set this up in app because both of apps component children require access to the users and/or setUsers setter function/variable in order to serve their functional purpose

  const [users, setUsers] = useState([]);


  //App has two component children "Form" which is where the input form for user data resides and Users which is the container component for individual User components which 
  //visually displays user data

  return (
    <div className="App">
      <Form setUsers={setUsers} users={users}/>
      <Users users={users} />
    </div>
  );
}

export default App;
