import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import * as yup from "yup"
import formSchema from "./schema"
import { Adduser } from './action';

function App() {
  const [members, setMemebers] = useState([])
  const [input, setinput] = useState(
    { firstname: "", lastname: "", email: "", password: "", checked: false }
  )
  const [formErrors, setFormErrors] = useState(
    { firstname: "", lastname: "", email: "", password: "", checked: "" })
  
  const [disabled, setdisabled] = useState(true)



  //  console.log(formSchema)

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value).then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))

  }

  const inputchange = async event => {
    const { value, checked, name, type } = event.target
    const valuetouse = type === "checkbox" ? checked : value
    validate(name, valuetouse)
    setinput({ ...input, [name]: valuetouse });
    const isFormValid = await formSchema.isValid(input)
    isFormValid ? setdisabled(false) : setdisabled(true)

  }

  const submit = async event => {
    event.preventDefault()
    setMemebers([...members, input])
    Adduser(input).then(response=> console.log(response))
    setinput({ firstname: "", lastname: "", email: "", password: "", checked: false })
   
  }





  return (
    <div className="App">
      <p>{formErrors.email}</p>
      <p>{formErrors.password}</p>
      <p>{formErrors.checked}</p>
      {/* - [ ] Name (first_name, last_name)
- [ ] Email
- [ ] Password
- [ ] Terms of Service (checkbox)
- [ ] A Submit button to send our form data to the server. */}
      <form onSubmit={submit}>
        <label>FirstName: </label>
        <input name="firstname" onChange={event => inputchange(event)} type="text" /> &nbsp;
        <label>LastName: </label>
        <input name="lastname" onChange={event => inputchange(event)} type="text" />&nbsp;
        <label >Email</label>
        <input name="email" onChange={event => inputchange(event)} type="text" />&nbsp;
        <label>Password</label>
        <input name="password" onChange={event => inputchange(event)} type="text" />&nbsp;
        <label>Terms of Service</label>
        <input name="checked" type="checkbox" checked={input.checked} onChange={event => inputchange(event)} />
        <button disabled={disabled}>Submit</button>
      </form>


      {members.map((person, indx) => {
        return (
          <div key={indx}>
            {person.firstname}, {person.lastname},{person.email}, {person.password}
          </div>
        )
      })}


    </div>
  );
}

export default App;
