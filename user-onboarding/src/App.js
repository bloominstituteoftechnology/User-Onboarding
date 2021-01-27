import React, {useState} from 'react'
import Form from './Form'

const initFormValues = {
  name: '',
  email: '', 
  password: '',
  terms: false,
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues]= useState(initFormValues);

  return (
    <div >
      <Form members={members}/>
    </div>
  );
}

export default App;
