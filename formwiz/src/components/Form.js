import React, {useState, useEffect} from 'react'
import * as yup from 'yup'

const Form = props => {

    const validate = (event) => {
        yup.reach(formschema,event.target.name)
           .validate(event.target.name === "isChecked" ? event.target.checked: event.target.value)
           .then( valid => {
               setErrors({
                   ...errors,
                   [event.target.name]:""
               })
           })
           .catch( err => {
               console.log("error", err.errors)
               setErrors({...errors,
            [event.target.name]:err.errors[0]
            })
            
        })
    }

    const [member,setMember] = useState({
        name:"",
        email:"",
        password:"",
        isChecked:false,
        gender:""
    })

    const [errors,setErrors] = useState({
        name:"",
        email:"",
        password:"",
        isChecked:"",
        gender:""
    })

    useEffect(()=>{
        formschema.isValid(member).then(valid=>{
            setButtonDisabled(!valid);
        });
    })

    const formschema = yup.object().shape({
        name:yup.string().required("Name is a required field"),
        email:yup.string().email("Must be valid email address").required("Email is a required field"),
        password:yup.string().required("Password required"), 
        isChecked: yup.boolean().oneOf([true],"Please agree to terms of use"),
        gender: yup.mixed().oneOf(["Male","Female"],"You must choose to proceed").defined()
    })

    const [buttonDisabled,setButtonDisabled] = useState(true)

    const eventHandler = (event) => {
        event.persist()
        validate(event)
        setMember({
            ...member, 
            [event.target.name]:event.target.type === "checkbox"? event.target.checked: event.target.value
        })
    }

    return(
        
        <form onSubmit={(event) => {
            event.preventDefault();
            setMember({name:'',email:'',password:'',gender:'',isChecked:'',})
            }
        }>
            <label>Sign In</label><br/>
            <label htmlFor="Name">Name</label><br/>
            <input type="text" placeholder="John Smith" name="name" value={member.name} onChange={eventHandler}></input><br/>
            {errors.name.length > 0 ? <p>**{errors.name}</p> : null}
            <label htmlFor="Email">Email</label><br/>
            <input type="email" placeholder="email@example.com" name="email" value={member.email} onChange={eventHandler}></input><br/>
            {errors.email.length > 0 ? <p>**{errors.email}</p> : null}
            <label htmlFor="Password">Password</label><br/>
            <input type="password" placeholder="password123" name="password" value={member.password} onChange={eventHandler}></input><br/>
            {errors.password.length > 0 ? <p>**{errors.password}</p>:null}
            <label htmlFor="Gender">Gender</label><br/>
            <select id="gender" name="gender" onChange={eventHandler}>
                <option value="choose gender">select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br/>
            {errors.gender.length > 0 ? <p>**{errors.gender}</p>:null}
            <input type="checkbox" name="isChecked" checked={member.isChecked} onChange={eventHandler}></input><label>I agree to the Terms</label> <br/>
            {errors.isChecked.length > 0 ? <p>{errors.isChecked}</p>:null}
            <button disabled={buttonDisabled}>SubmIt</button>
        </form>)
}

export default Form