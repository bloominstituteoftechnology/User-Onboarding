import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import axios from "axios";


  


const Form = (props) => {

    const [post, setPost] = useState([])

    
    // const {inputForms, setInputForms} = props;


    const [inputForm, setInputForm] = useState({name: "", email: "", password: "", terms: ""})
    
    // const handleChange = event => {

    //     setInputForm({...inputForm, [event.target.name]: event.target.value});
    // }

    const handleSubmit = event => {

        event.preventDefault();
        // setInputForms([...inputForms, { ...inputForm, id: Date.now() }]);
        axios.post("https://reqres.in/api/users", inputForm)
        .then(res => {setPost(res.data)
        
           setInputForm({

            name: "", 
            email: "", 
            password: "", 
            terms: ""

           }) ;
        }).catch(err => console.log(err.res));
    }; 



    const formSchema = Yup.object().shape({
       name: Yup
       .string()
       .required("Must input a Name."),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        terms: Yup
          .boolean()
          .oneOf([true], "You must accept Terms and Conditions")
      });

      const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
    
      const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
      });

      


      const inputChange = event => {
       
        event.persist();

        const newFormData = {

            ...inputForm,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value

        };
        validateChange(event);
        setInputForm(newFormData);
    
    };

    useEffect(() => {

        formSchema.isValid(inputForm)
        .then(valid => {

            setIsButtonDisabled(!valid);
        });

    }, [inputForm]);
    

    const validateChange = event => {

        Yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then( valid => {

           setErrors({...errors, [event.target.name]: ""}) 
        })
        .catch(err => setErrors({...errors, [event.target.name]: err.errors[0] }));
    }



return (

<form onSubmit={handleSubmit}>

<label htmlFor="name"> 
    Name
    <input id="name" type="text" name="name" value={inputForm.name} onChange={inputChange} />
    {errors.name.length > 0 ? (<p >{errors.name}</p>): null }
</label>

<label htmlFor="email"> 
    Email
    <input id="email" type="email" name="email" value={inputForm.email} onChange={inputChange} />
    {errors.email.length > 0 ? (<p>{errors.email}</p>): null}
</label>

<label htmlFor="passwoerd"> 
    Password
    <input id="password" type="password" name="password" value={inputForm.password} onChange={inputChange} />
    {errors.password.length > 0 ? (<p>{errors.password}</p>): null}
</label>

<label htmlFor="terms"> 
    Click here if you agree to the T.O.S:
    <input id="terms" type="checkbox" name="terms"  checked={inputForm.terms} onChange={inputChange} />
    {/* {errors.terms.length > 0 ? (<p>{errors.terms}</p>): null } */}
</label>
<pre>{JSON.stringify(post, null, 2)}</pre>
<button type="submit" disabled={isButtonDisabled} >Submit</button>

</form>


)



}

export default Form;