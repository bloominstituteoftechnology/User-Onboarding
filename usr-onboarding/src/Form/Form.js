import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'


const Form =(params) => {
    const [changes, setChanges] = useState({name:"",email:"", password: "", evtChk: false})
    const handleChange = (e) =>{
        const ch= {...changes,[e.target.name]: e.target.value};
            setChanges(ch);
    };
    const handleSubmite = (e) =>{

    };

    const handleChkChange = (e)  =>{

    }

    return (
       <div className="App">
            <form className="App">
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
