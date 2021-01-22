import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from 'axios';

export default function Form (){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        terms: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    

    const formSchema = Yup.object().shape({
        email: Yup
          .string()
          .email("Enter valid email address.")
          .required("Must enter email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        terms: Yup
          .boolean()
          .oneOf([true], "You must accept Terms and Conditions")
      });

      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

    const handleChanges = (e) => {
        e.persist();
        if(e.target.name !== "name"){
            Yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                ...errors,
                [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
                });
            });
        }
       
        setFormState({...formState, [e.target.name]:  e.target.name == "terms"? e.target.checked: e.target.value})
        console.log(e.target.checked)
    }

    const [users, setUsers] = useState([]);

    const submitForm =(e)=>{
        e.preventDefault();
        console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setUsers(res.data);
        setFormState({
            name: "",
            email: "",
            password: "",
            terms: false
        })
        console.log('success', users)      
      })
      .catch(err => console.log(err.res));
    };
     
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name
                <input name='name' id='name' type='text' onChange={handleChanges} value={formState.name}/>
            </label>
            <label htmlFor='email'>Email
                <input name='email' id='email' type='text' onChange={handleChanges} value={formState.email}/>
            </label>
            <label htmlFor='password'>Password
                <input name='password' id='password' type='text' onChange={handleChanges} value={formState.password}/>
            </label>
            <label htmlFor='terms'>Terms of Service
                <input name='terms' id='terms' type='checkbox' checked={formState.terms} onChange={handleChanges}/>
            </label>
                <button type='submit'>
                    SUBMIT
                </button> 
                <pre>{JSON.stringify(users, null, 2)}</pre>
        </form>
    )
}