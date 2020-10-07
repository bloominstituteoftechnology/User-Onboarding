import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'


const Form =(params) => {
    const [changes, setChanges] = useState({id:0,name:"",email:"", password: ""})
    const [submited,setSubmited] = useState(false);
    const [usrs,setUsrs] = useState({id:0,name:"",email:"",password:""})
    const [res,setRes] = useState([]);
    const handleChange = (e) =>{
        e.persist();
        const ch= {...changes,[e.target.name]: e.target.value};
    
            setChanges(ch);
            // console.log(changes);
    };
    const handleSubmite = (e) =>{
        e.preventDefault();
        const ch= {...changes};
        console.log(e);
            setUsrs(ch);
            console.log(usrs)
            console.log(res);
        setSubmited(true);
        //  return {...changes};
        
            axios.post(`https://reqres.in/api/users`,changes)
            .then(evn =>{
                console.log('ev')
                console.log(evn);
                setRes(evn.data);
                
    
            })
            .catch(er =>{
                console.log(er);
            })
        
    };

    const handleChkChange = (e)  =>{

    }
    

    return (
       <div className="App">
           <h1>Sign Up, Right-Now!</h1>
            {
                submited ? 
            <div id={res.id}><pre>{JSON.stringify(res,null,2)}</pre> 
                
                </div> 
                
    
                : 
                <form className="App" onSubmit={handleSubmite}>
                    <label>
                        Name
                    </label>
                    <input type="text" name="name" placeholder="Enter Name" onChange={e =>handleChange(e)} />
                    <label>
                        Password
                    </label>
                    <input type="text" name="password" placeholder="Enter Password" onChange={e =>handleChange(e)} />
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
                    <button type="submit" >Sign Me Up</button>
    
            </form>
            }
       </div>
    );
}

export default Form;
