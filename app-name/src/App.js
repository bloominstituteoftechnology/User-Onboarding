import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from 'axios'


import formSchema from './Validation/formSchema';
import * as yup from 'yup';



const initialFormValues = {
  username: '',
  password: '',
  email:'',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email:'',
  tos: false
}



function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormValues)
  const [users, setUsers] = useState([]);

const handleSubmit = () => {
  axios.post('https://rewuires.in/api/users', formValues)
  .then(res => {
    
    setUsers([res.data, ...users])
  })
  .catch(err => console.error(err))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formValues, [name]: ''}))
    .catch(err = setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: formValues})
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user =>{
        <div key={user.id}>
          <p>{user.createAt}</p>
          <p>{user.email}</p>
        </div>
      })}
    </div>
  );
}

export default App;
