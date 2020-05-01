import React, {useState} from 'react';



const Form = (props) => {

    
    // const {inputForms, setInputForms} = props;


    const [inputForm, setInputForm] = useState({name: "", email: "", password: ""})
    
    const handleChange = event => {

        setInputForm({...inputForm, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {

        event.preventDefault();
        // setInputForms([...inputForms, { ...inputForm, id: Date.now() }]);
        setInputForm([{name: "", email: "", password: ""}]);

    } 

return (

<form onSubmit={handleSubmit}>

<label> 
    Name
    <input type="text" name="name" value={inputForm.name} onChange={event => handleChange(event)} />
</label>

<label> 
    Email
    <input type="email" name="email" value={inputForm.email} onChange={event => handleChange(event)} />
</label>

<label> 
    Password
    <input type="password" name="password" value={inputForm.password} onChange={event => handleChange(event)} />
</label>

<label> 
    Click here if you agree to the T.O.S:
    <input type="checkbox" name="terms" checked={false} />
</label>

<button>Submit</button>

</form>


)



}

export default Form;