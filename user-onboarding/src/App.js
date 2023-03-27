import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import * as Yup from "yup"
import formSchema  from "./schema"

function App() {
  const [members, setMemebers] = useState([])
  const [input , setinput] = useState(
    {firstname: "", lastname: "", email: "", password: "", checked: false}
    )
  const [formErrors, setFormErrors] = useState(
    {firstname: "", lastname: "", email: "", password: "", checked: false})



  //  console.log(formSchema)

   const validate = (name, value)=>{
    Yup.reach(formSchema , name)
    .validate(value).then(()=> setFormErrors({...formErrors, [name]: ""}))
    .catch(err=>setFormErrors({...formErrors, [name]: err.errors[0]}))
   }

    const inputchange = event => {
      const {value, checked, name , type } = event.target
      const valuetouse = type === "checked" ? checked : value
      console.log(checked)
      validate(name, value)
      setinput({...input, [name]: valuetouse});
    
    }
    
    const submit = event => {
    
      event.preventDefalt()
      setinput({firstname: "", lastname: "", email: "", password: "", checked: false})
      setMemebers([...input])
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
      <input name="firstname"onChange={event => inputchange(event)} type="text"/> &nbsp;
      <label>LastName: </label>
      <input name="lastname"onChange={event =>inputchange(event)}  type="text"/>&nbsp;
      <label >Email</label>
      <input name="email" onChange={event =>inputchange(event)}  type="text"/>&nbsp;
      <label>Password</label>
      <input name="password" onChange={event =>inputchange(event)}  type="text"/>&nbsp;
      <label>Terms of Service</label>
      <input name="checked" type="checkbox" checked={input.checked} onChange={event =>inputchange(event)}/>
      <button>Submit</button>
</form>
{members.map((person, indx)=> {
  return(
    <div key={indx}>
      {person.firstname}, {person.lastname},{person.email}, {person.password}
    </div>
  )
})}
    </div>
  );
}

export default App;
