import React, {useState, useEffect} from 'react'
import './App.css'
import * as Yup from 'yup'
import axios from 'axios'
const url = "https://reqres.in/api/users"
const schema = Yup.object().shape({
    user: Yup.string().required("User is required").min(6,"user need to be 6 chars"),
    star: Yup.string().oneOf(['wars', 'trek'], 'you must select wars or trek'),
    language: Yup.string().oneOf(['1','2','3'], 'you must choose a language'),
    agree: Yup.boolean().oneOf([true],'Pick one'),
    password: Yup.string().required("password").min(4,"four min")
})
function App (){
   const [form, setForm ] = useState({
       user:"",
       email:'',
       password: '',
       agree: false,
       language:'',
       star:""
      
   })
 const [ disabled, setDisabled ] = useState(true)
 const change = event=>{
     const {name, value, checked, type} = event.target;
     const valueToUse = type === 'checkbox' ? checked : value;
     setForm({...form, [name]: valueToUse})
    
 }
 useEffect(() =>{
    
     schema.isValid(form).then(valid=> setDisabled(!valid))
     
 }, [form])
    return (
        <div className="App">
            <form>

           
            <label htmlFor="firstName">First Name:
            <input onChange={change} type="text" value={form.user} name="user" placeholder="First Name" />
            </label>< br/>
            <label htmlFor="email">Email:
            <input onChange={change} type="email" value={form.email} name="email" placeholder="Email" />
            </label>< br/>
            <label htmlFor="password">PassWord:
            <input onChange={change} type="password"  value={form.password} name="password" placeholder="Password" />
            </label>< br/>
            <label > Terms of Service
                <input onChange={change} checked={form.agree} name="agree" type="radio" />
            </label>< br/>
            <label>Star Trek:
                <input onChange={change}  checked={form.star === "trek"} value="trek"name="star" type="radio" />
            </label>
            <label>Star Wars:
                <input  onChange={change} checked={form.star ==='wars'} value="wars" name="star" type="radio" />
            </label><br/>
            <select onChange={change} value={form.language} name="language">
                <option value="">Select Language</option>
                <option value="1">JavaScript</option>
                <option value="2">Python</option>
                <option value="3">Node</option>
            </select>< br/>
            <button  disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default App;