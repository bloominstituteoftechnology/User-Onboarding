import React, {useState} from 'react'
import Form from './Form'
import * as yup from 'yup'
const initFormValues = {
  name: '',
  email: '', 
  password: '',
  terms: false,
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues]= useState(initFormValues);

const change = (name, value)=>{
setFormValues({...formValues, [name]:value})

};

  return (
    <div >
      <Form members={members} values={formValues} change={change}/>
        <div>
          <p>{formValues.name}</p>
        </div>


    </div>
  );
}

export default App;
