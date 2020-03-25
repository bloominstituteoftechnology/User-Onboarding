import React, { useState, useEffect } from 'react'


const Form =(props) =>{
    console.log("formprops",props)
    const [formState, setFormState] = useState([{
        name: "",
        email: "",
        password: "",
        term:"",
        position: ""
    }]);
  
    const [errors, setErrors] = useState([{
        name: "",
        email: "",
        password: "",
        term:"",
        position: ""
    }]);

    useEffect(() => {

    },[])
       

    const handleChange = event => {
        setFormState({ 
            ...formState, 
            [event.target.name]: event.target.value });
      };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(formState.name);
        // console.log(formState.email)
        // console.log(formState.password)

        props.addNewForm(formState);
        setFormState({
            name:"", 
            email: "",
            password:"",
            term:"",
            position: ""
        });
    }
    console.log("form:",formState)
    return (
        <div>
     
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
                <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    
                />
                 <br />           
            <label>Email</label>   
                <input 
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                  <br />    
            <label>password</label>
                <input 
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                  <br />    
            <button>Submit!</button>
        </form>
        </div>
    )
}


export default Form