import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import * as yup from "yup";
import axios from "axios";


//Styling
const SuperContainer = Styled.div`
display: flex;
`

const InputDiv = Styled.div`
display:flex;
flex-wrap: no wrap;
align-content:center
margin:2%;
width:100%;
`;

const AwesomeInputs = Styled.input`
width: 90%;
padding: 7px 10%;
box-sizing: border-box;
background-color:azure; 
border-radius: 10px;
margin-top: 5%;
`
const AwesomeSelect = Styled.select`
display:flex;
width: 100%;
height: 30px;
background-color:azure; 
margin-top:5%
`

const SelectDiv = Styled.div`
display:flex;
justify-content:center;
width: 50%;
`

const TermsDiv = Styled.div`
margin-top: 5%;
`

const TermsPara = Styled.p`
text-align:justify;
`

const Button = Styled.button`
font-size: .8em;
margin: 2%;
padding: 0.8em 1.2em;
border-radius: 8px;
box-shadow: 3px 5px 6px Navy;
display:flex;
justify-content:center;
`

const ButtonDiv = Styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

const ErrorsDiv = Styled.div`
display:flex;
`
const Errorp = Styled.p`
color: red;
text-transform:uppercase;
font-size:.7rems;
`


//Form Validation
const formSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter your email")
    .required("Must include an email"),
  password: yup
    .string()
    .min(5, "This password is too short please enter 5 characters or more")
    .required("Please enter your password"),
  terms: yup
    .boolean()
    .oneOf([true], "Please Read and Agree to our Terms of Use"),
    positions: yup
    .string()
    .required("Please select a position")
});


//Form

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    positions: "",
    terms: "",
    
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    positions: "",
    terms: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = e => {
    yup
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
          [e.target.name]: err.errors
        });
      });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(formState)
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setUsers(existing => [...existing, res.data]);
        console.log("success", users);

        setFormState({
          name: "",
          email: "",
          password: "",
          terms: ""
        });
      })
      .catch(err => {
        console.log(err.res);
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <>

    <SuperContainer>
      
      <form onSubmit={formSubmit}>
        <InputDiv>
          <label htmlFor="name">
            Name: 
            <AwesomeInputs
              id="name"
              data-cy="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={inputChange}
              placeholder="Please Enter your Name"
            />
          
          </label>
    

        
          <label htmlFor="email">
            Email:
            <AwesomeInputs
              id="email"
              data-cy="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={inputChange}
              placeholder="Please Enter your Email Address"
            />
         
          </label>
        

        
          <label htmlFor="password">
            Password:
            <AwesomeInputs
              id="password"
              data-cy="password"
              type="password"
              name="password"
              value={formState.password}
              onChange={inputChange}
              placeholder="Please Enter your Password"
            />
       
          </label>
        

            <SelectDiv>
          <label htmlFor="positions">
            What Is your Specialty
            <AwesomeSelect data-cy="positions" value={formState.positions} id="positions" name="positions" onChange={inputChange}>
            <option value="">Select One...</option>
              <option value="gamer">Gamer</option>
              <option value="hacker">Hacker</option>
              <option value="web">Web Dev</option>
              <option value="youtuber">You Tuber</option>
            </AwesomeSelect>
          </label>
        

          </SelectDiv>
        </InputDiv>

        <TermsDiv>
          <h4>Our Terms &amp; Conditions</h4>
          <TermsPara>
            The following are the General Terms and Conditions under which
            Global Experience Specialists, Inc. (“GES”) provides Services to
            you, our valued customer ("Customer") under this Agreement and shall
            also apply to every Change Order or Show Site Services Order issued
            by GES to Customer. GES will not accept and hereby objects to any
            additional or different terms and conditions that may be contained
            in Customer’s purchase order or other writing. No modification or
            waiver of any provision in these General Terms and Conditions will
            be effective unless in writing and signed by the party sought to be
            charged with the change. GES’ performance is expressly conditioned
            on Customer’s acceptance of these General Terms and Conditions and
            Customer agrees to be bound hereby.
          </TermsPara>

          <label htmlFor="terms" className="terms">
            <input
              type="checkbox"
              data-cy="terms"
              name="terms"
              checked={formState.terms}
              onChange={inputChange}
            />
            Terms and Conditions
          </label>
        </TermsDiv>

        <ButtonDiv>
          <Button data-cy="submit" disabled={buttonDisabled}>Submit</Button>
        </ButtonDiv>
      </form>
      
    </SuperContainer>

    <ErrorsDiv>

      <div>{errors.name.length > 0 ? <Errorp>{errors.name}</Errorp> : null}</div>
      <div data-cy="emailerror">{errors.email.length > 0 ? <Errorp>{errors.email}</Errorp> : null}</div>
      <div>{errors.password.length > 0 ? <Errorp>{errors.password}</Errorp> : null}</div>
      <div>{errors.positions.length > 0 ? <Errorp>{errors.positions}</Errorp> : null}</div>
      </ErrorsDiv>

      <div>
      {users.map(user => (
        <>
        <h2>New Sign Ups:</h2>
        <p>{user.name} is a {user.positions}</p>
        </>
      ))}
      </div>
    </>
  );
};

export default Form;
