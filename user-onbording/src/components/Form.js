import React, {useState, axios} from "react";
import {Container, Col,Label,FormGroup, Input, Button} from "reactstrap";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name:yup.string().required("Name is a required field"),
    email:yup.string().email.required("Must include email address"),
    password:yup.string().password().required(),
    terms:yup.boolean().oneOf([true]," Please agree to terms of use")
})

export default function Form (){
    // managing state for our form inputs
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    });

    const [errorState, setErrorState] = useState({
        name:"",
        email:"",
        password:"",
        terms:""
    });
// onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios.post(`https://reqres.in/api/users`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
 
    };
    
    const validate = (e) =>{
        
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrorState({
                ...errorState,
                [e.target.name]:""
            })

        })
        .catch( err => console.log(err.errorState))
        setErrorState({
            ...errorState,
            [e.target.name]: err.errorState[0]
        })
    };

    //onChange function 
    const inputChange = e =>{
        e.persist()
        //console.log("input changed!", e.target.value, e.target.checked);
        validate(e)
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setUser({...user, [e.target.name]: value});
    };

    return (
        <Container>
        <form onSubmit={formSubmit}>
            <Col>
            <FormGroup>
            <Label htmlFor="name">
                Name:
                <Input type="text" 
                name="name" 
                id="name"
                placeholder = "Name"
                value={user.name}
                onChange={inputChange}
                />   
            </Label>
            </FormGroup>
        
            </Col>  
              <FormGroup>
            <Col>
            <Label htmlFor="email">
                Email:
                <Input type="email" 
                name="email" 
                id="email"
                placeholder = "Email"
                value={user.email}
                onChange={inputChange}
                />
                {errorState.email.length > 0 ? <p className = "error">{errorState.email}</p> : null }
                </Label>
                </Col> 
                 </FormGroup>
                <Col>
                <FormGroup>
                <Label htmlFor="password">
                Password:
                <Input type="password" 
                name="password" 
                id="password"
                placeholder = "Password"
                value={user.password}
                onChange={inputChange}
                />
            </Label>
            </FormGroup>
            </Col>
            
            <Col>
            <Label htmlFor="Terms of Service">
                Terms of Service:
                <Input 
                type="checkbox" 
                name="terms" 
                id="terms"
                checked={user.terms}
                onChange = {inputChange}
                />
            </Label>
           </Col>
            <Button>Submit</Button>

        </form>
        </Container>
    )
}