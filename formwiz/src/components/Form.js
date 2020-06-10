import React, {useState, useEffect} from 'react'
import * as yup from 'yup'

const Form = props => {

    const [member,setMember] = useState({
        name:"",
        email:"",
        password:"",
        isChecked:false,
        gender:""
    })

    useEffect(()=>{
        console.log("form state change")
        formschema.isValid(member).then(valid=>{
            console.log(valid,"valid")
            setButtonDisabled(!valid);
        });
    })

    const formschema = yup.object().shape({
        name:yup.string().required("Name is a required field"),
        email:yup.string().email("must be valid email address").required("Email is a required field"),
        password:yup.string().required("password required"), 
        isChecked: yup.boolean().oneOf([true]," please agree to terms of use"),
        gender: yup.mixed().oneOf(["Male","Female"]).defined()
    })

    const [buttonDisabled,setButtonDisabled] = useState(true)

    const eventHandler = (event) => {
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
            <input type="text" placeholder="name" name="name" value={member.name} onChange={eventHandler}></input><br/>
            <input type="text" placeholder="email" name="email" value={member.email} onChange={eventHandler}></input><br/>
            <input type="text" placeholder="password" name="password" value={member.password} onChange={eventHandler}></input><br/>
            <select id="gender" name="gender" onChange={eventHandler}>
                <option value="choose gender">select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br/>
            <input type="checkbox" name="isChecked" checked={member.isChecked} onChange={eventHandler}></input><label>I agree to the Terms</label> <br/>
            <button disabled={buttonDisabled}>SubmIt</button>
        </form>)
}

export default Form