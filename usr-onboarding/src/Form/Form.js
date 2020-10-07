import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'


const Form =(params) => {
    const [changes, setChanges] = useState({name:"",email:"", password: "", evtChk: false})
    const handleChange = (e) =>{
        const ch= {...changes,[e.target.name]: e.target.value};
            setChanges(ch);
            console.log(changes);
    };
    const handleSubmite = (e) =>{
        return {...changes};
    };

    const handleChkChange = (e)  =>{

    }
    axios.post(`https://reqres.in/api/users`,changes)
        .then(e =>{
            console.log(e);
        })
        .catch(er =>{
            console.log(er);
        })

    return (
       <div className="App">
           <h1>Sign Up, Right-Now!</h1>
            <form className="App" onSubmit={handleSubmite}>
                <label>
                    Name
                </label>
                <input type="text" name="name" placeholder="Enter Name" onChange={e =>handleChange(e)} />
                <label>
                    Password
                </label>
                <input type="text" name="pass" placeholder="Enter Password" onChange={e =>handleChange(e)} />
                <label>
                    E-mail
                </label>
                <input type="text" name="email" placeholder="Valid E-Mail"  onChange={e =>handleChange(e)} />
                <Link to="/terms">
                    <label>
                        Terms Of Services
                    </label>
                </Link>
                <input type="checkbox" onChange={e =>handleChkChange(e) } />
                <button onSubmit={e => handleSubmite(e)}>Sign Me Up</button>

        </form>
       </div>
    );
}

export default Form;
