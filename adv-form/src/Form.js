import React, { useState }from "react";
import Styled from "styled-components";
import * as yup from "yup";


const superContainer = Styled.div`
display: flex;
flex-direction:column;
`
const inputDiv = Styled.div`
margin:15%;
`

const formSchema = yup.object().shape({
    name: 
    yup
    .string()
    .required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter your email")
      .required("Must include an email"),
    password: 
    yup
    .string()
    .required("Please enter your password"),
    terms: 
    yup.
    boolean().
    oneOf([true], 
    "Please Read and Agree to our Terms of Use"),
     });

const Form = () => {


    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms:"",
      });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms:"",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [post, setPost] = useState([]);


      return (
        <superContainer>
            <form>

                <inputDiv>
                    <label htmlFor="name">
                    Name: 
                    <input 
                    id="name" 
                    type="text" 
                    name="name"
                    value={formState.name}
                    //onChange= 
                    placeholder="Please Enter your Name" />
                    </label>
                </inputDiv>

                <inputDiv>
                    <label htmlFor="email">
                    Email:  
                    <input 
                    id="email" 
                    type="email" 
                    name="email"
                    value={formState.email}
                    //onChange= 
                    placeholder="Please Enter your Email Address" />
                    </label>
                </inputDiv>

                <inputDiv>
                    <label htmlFor="password">
                    Password:  
                    <input 
                    id="password" 
                    type="password" 
                    name="password"
                    value={formState.password}
                    //onChange= 
                    placeholder="Please Enter your Password" />
                    </label>
                </inputDiv>

                <inputDiv>
                    <h4>Our Terms &amp; Conditions</h4>
                    <p>The following are the General Terms and Conditions under which Global Experience Specialists, Inc. (“GES”) provides Services to you, our valued customer ("Customer") under this Agreement and shall also apply to every Change Order or Show Site Services Order issued by GES to Customer. GES will not accept and hereby objects to any additional or different terms and conditions that may be contained in Customer’s purchase order or other writing. No modification or waiver of any provision in these General Terms and Conditions will be effective unless in writing and signed by the party sought to be charged with the change. GES’ performance is expressly conditioned on Customer’s acceptance of these General Terms and Conditions and Customer agrees to be bound hereby.</p>

                    <label htmlFor="terms" className="terms">
                    <input
                    type="checkbox"
                    name="terms"
                    checked={formState.terms}
                    // onChange=
                    />
                    Terms and Conditions
                    </label>
                    
                </inputDiv>

                <inputDiv>
                <button disabled={buttonDisabled}>
                    Submit
                </button>
                </inputDiv>

            </form>
        </superContainer>
      );
    }


export default Form;