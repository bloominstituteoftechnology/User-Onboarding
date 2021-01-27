import './App.css';
import { useState } from 'react'
import Form from './Components/Form'


const initialUsers=[]

function App() {
///States//////
  const [user, setUser]= useState(initialUsers)








  return (
    <div className="App">
      
      <Form      
      />
    </div>
  );
}

export default App;
