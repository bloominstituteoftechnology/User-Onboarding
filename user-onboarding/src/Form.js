import React, {useState} from 'react'
function Form (){
   const [form, setForm ] = useState({
       name: '',
       email:'',
       password: '',
       agree: false,
       language:''
   })

    return (
        <div className="App">
            <label htmlFor="firstName">First Name:
            <input type="text" value={form.name} name="user" placeholder="First Name" />
            </label>< br/>
            <label htmlFor="email">Email:
            <input type="email" value={form.email} name="email" placeholder="Email" />
            </label>< br/>
            <label htmlFor="password">PassWord:
            <input type="password"  value={form.password} name="password" placeholder="Password" />
            </label>< br/>
            <label > Terms of Service
                <input checked={form.agree} name="agree" type="radio" />
            </label>< br/>
            <label>Star Trek:
                <input  checked={form.star === "trek"} value="trek"name="star" type="radio" />
            </label>
            <label>Star Wars:
                <input  checked={form.wars ==='star'} value="wars" name="star" type="radio" />
            </label><br/>
            <select value={form.language} name="language">
                <option value="">Select Language</option>
                <option value="1">JavaScript</option>
                <option value="2">Python</option>
                <option value="3">Node</option>
            </select>< br/>
            <button type="submit">Submit</button>
        </div>
    )
}
export default Form;