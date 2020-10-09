import React, {useState, useEffect} from 'react';
import './App.css';
import User from './Components/User'

import Form from './Components/Form'

function App() {
  const [users, setUsers] = useState([]);
  const Sub = (newData) => {
    setUsers([...users, newData])
  };

  return (
    <div className="App">
      <Form sub={Sub}/>
      {
        users.map(element =>{
          return(
          <User user={element}  key={element.name}/>
          )
        })
      }
    </div>
  );
}

export default App;
