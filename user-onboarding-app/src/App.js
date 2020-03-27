import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import Form from './components/Form';

const initialTeam = [
  {
    id: uuid(),
    name: 'Denis',
    email: 'a@a.com ',
    role: 'Frontend',
  },
];
function App() {
  //set State for team
  const [teamList, setTeamList] = useState(initialTeam);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Developer Contacts</h1>
        {teamList.map(dev => (
          <>
            <h3 key={dev.email}>
              {dev.name}, our {dev.role} engineer, can be reached at
              {dev.email}
            </h3>
          </>
        ))}
        <Form teamList={teamList} setTeamList={setTeamList} />
      </header>
    </div>
  );
}

export default App;
