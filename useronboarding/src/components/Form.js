import {React,useState} from "react";
import * as Yup from yup


const Form = (props) =>{
    //create my state for user data intake
    const[user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        terms:false,

    })
    //create a yup schema to validate my information
    const formSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("this is how we deliva the package")
            .required("Hey you stool pigeon we need ya address"),
        password: Yup
            .string()
            .min(6,"you put 6 characters in or ya 6 feet under ya hear?"),
        terms: Yup
            .boolean()
            .oneOf([true],"this is an offer you can't refuse")

    })
    
    


    //our actual form
    return(
        <form>
            <label htmlFor="name">
                Name
                    <input name="name"/></label>
            <label htmlFor="email">
                Email
                    <input name="email"/></label>
            <label htmlFor="password">
                Password
                <input/></label>
            <label htmlFor="terms">
                Terms of Service
                    <input type="checkbox" name="terms" value={true}/></label>     


        </form>
    )



}