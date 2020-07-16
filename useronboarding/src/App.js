import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [user, setUser]=useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Form user={user} setUser={setUser}/>
      <div>
            {user.map(user=>(
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>))}
    </div>
    </div>
  );
}

export default App;
