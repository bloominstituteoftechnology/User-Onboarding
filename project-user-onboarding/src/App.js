import Form from './components/Form';
import User from './components/User'
import { useState, useEffect } from 'react';
import * as yup from "yup";
import { schema } from './validation/formSchema';
import './App.css';
import axios from 'axios';


function App() {

  /* -------------------------- STATE -------------------------- */
  /* -------------------------- STATE -------------------------- */
  /* -------------------------- STATE -------------------------- */

  const [users, setUsers] = useState([]);
  const [formValues, setValues] = useState(formValueStart);
  const [formErrors, setFormErrors] = useState(errorsStart);
  const [disabled, setDisabled] = useState(disabledStart);


  /* -------------------------- HELPERS -------------------------- */
  /* -------------------------- AXIOS -------------------------- */
  /* -------------------------- PLUS -------------------------- */
const getUsers = () => {
  axios
    .get("https://reqres.in/api/users")
    .then(({data}) => {
      console.log(data)
      setUsers(data.data)
    })
    .catch((err) => console.log("Error retrieving User:", err));
};

const postNewUser = (newUser) => {
  axios
    .post("https://reqres.in/api/users", newUser)
    .then(({data}) =>{
      console.log(data)
      setUsers([data, ...users])
    })
    .catch((err) => console.log("Error Retrieving New User", err))

};



  /* -------------------------- HANDLERS -------------------------- */
  /* -------------------------- HANDLERS -------------------------- */
  /* -------------------------- HANDLERS -------------------------- */


 /* -------------------------- CHANGE -------------------------- */

  const inputChange = (event) => {

    const { name, value, checked, type } = event.target
    const inputValue = type === "checkbox" ? checked : value

    yup
      .reach(schema, name)
      .validate(inputValue)
      .then(() => 
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      )
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      );

      setValues({
        ...formValues,
        [name]: inputValue
      })
    
  };
 /* -------------------------- SUBMIT -------------------------- */

  const formSubmit = (event) => {
    event.preventDefault()
    postNewUser(formValues)

  }
 /* -------------------------- SIDE EFFECT -------------------------- */

  useEffect(() => {
    getUsers();
  },[]);

 /* -------------------------- SUBMIT ENABLE/DISABLE -------------------------- */

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

 
  return (
    <div className="App">

      <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
<br/><br/>
      {users.map((usrx) => {
        return <User key={usrx.id} info={usrx} />;
      })}
    </div>
  );
}

export default App;



//Initial States

const formValueStart = {
  name: '',
  email: '',
  password: '',
  terms: false,
}



const disabledStart = true;

const errorsStart = {
  name: '',
  email: '',
  password: '',
  terms: false
}