import Form from "./Form";
import { useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import User from './User';

const initialFormValues = {
  firstName: "",
  Email: "",
  password: "",
  serviceTerms: false,
};

const ogUsers = [{
  name: 'cody',
  email: 'cody@cody.com',
  password: 'cody',
  serviceTerms: true
},
{
  name: 'laiken',
  email: 'laiken@laiken.com',
  password: 'laiken',
  serviceTerms: true
}
]


const schema = yup.object().shape({
  firstName: yup.string().min(6, 'use more than six characters'),
  Email: yup.string().required('Provide Email'),
  password: yup.string().required('Provide Password'),
  serviceTerms: yup.boolean().oneOf([true], 'Check Box')
});
export default function App() {
  const [form, setForm] = useState(initialFormValues)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    serviceTerms: false
  })
const [users, setUsers]= useState(ogUsers)
const setFormErrors = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then( () => setErrors({...errors, [name]: ''}))
  .catch( err => setErrors({...errors, [name]: err.errors[0]}))
}


  const onChange = e =>{
    const valueToUse = e.target['type'] === 'checkbox' ? !form['serviceTerms'] : e.target['value']
    setFormErrors(e.target['name'],valueToUse)
    setForm({...form,[e.target['name']]:valueToUse})
  }
  
  const onSubmit = (e)=> {
    e.preventDefault();
   const newUser={
      firstName: form.name,
      Email: form.Email,
      password: form.password,
      serviceTerms: form.serviceTerms

    }
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setForm(initialFormValues)
        setUsers([...users,res.data])
        console.log("Api success", res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
  return (
    <div className="App container d-flex justify-content-center">
      <div style={{color:'red'}}>
        <div>
          {errors.firstName}
        </div>
        <div>
          {errors.Email}
        </div>
        <div>
          {errors.Password}
        </div>
        <div>
          {errors.serviceTerms}
        </div>
      </div>
      <div className="form-card d-flex justify-content-center">
        <div className="users">
          <h1>Users</h1>
          <p> Add new Users</p>
        </div>
        <Form form={form} onChange ={onChange} onSubmit ={onSubmit}/>
        {users.map((elem,id) => {
          return <User key={id} user={elem} />
        })}
      </div>
    </div>
  );
}
