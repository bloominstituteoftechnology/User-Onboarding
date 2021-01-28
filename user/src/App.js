import PersonForm from "./PersonForm"
import {useState} from "react"
import './App.css';

const initialUser = { name: "", email: "",}

function App() {
  const [user, setUser] = useState(initialUser)
  
 
  return (
    <div className="App">
      <header><h1>Advanced Form</h1></header>
      <PersonForm
        setUser={setUser}      
      />
      <h2>User</h2>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
    </div>
  );
}

export default App;
