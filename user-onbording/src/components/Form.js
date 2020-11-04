import React, {useState} from "react";
import {Container, Col,Label,FormGroup, Input, Button} from "reactstrap";

export default function Form (){
    // managing state for our form inputs
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        terms:false
    });

// onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
 
    };

    //onChange function 
    const inputChange = e =>{
        console.log("input changed!", e.target.value, e.target.checked);
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