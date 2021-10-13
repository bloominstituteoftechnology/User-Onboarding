import React, { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'


const initialTeamsList = [
  {
    id: 1, 
    username: 'John',
    email: 'john.harding@somecompany.com',
    role: 'Designer',
  },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
  const [teams, setTeams] = useState(initialTeamsList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorText, setErrorText] = useState("")

  console.log('teams', teams);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeam = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  
    if (!newTeam.username || !newTeam.email || !newTeam.role) {
      setErrorText("You've gotta enter in all the fields, ya chump!");
      return;
    }
          
      setTeams([newTeam, ...teams]);
      setFormValues(initialFormValues);
      setErrorText("");      
  }

  return (
    <div className="container">
      <h2>Form App</h2>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />
      {
        teams.map(team => {
          return (
            <Card key={team.id} details={team} />
          )
        })
      }

    </div>
  );
}

export default App;