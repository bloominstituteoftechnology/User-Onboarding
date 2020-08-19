import React, {useState} from 'react';
import './App.css';
import Onboarding from './Component/Form'

function App() {

  const [employeeData, setEmployeeData] = useState([]);
      
        const addNewMember = (data) => {
          const newMember = {
            id: Date.now(),
            Name: data.Name,
            Email: data.Email,
            Password: data.Password,
            Textarea: data.Textarea
          }
          setEmployeeData([...employeeData, newMember]);
          
        };
  return (
    <div className="App">
      hi
            <Onboarding employeeData={employeeData} addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
