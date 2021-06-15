import React, {useState} from 'react'
function Form (){
   const [form, setForm ] = useState({
       name: '',
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
    return (
        <div className="App">
            <label htmlFor="firstName">First Name:
            <input onChange={change} type="text" value={form.name} name="user" placeholder="First Name" />
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
            <button type="submit" disabled={disabled}>Submit</button>
        </div>
    )
}
export default Form;