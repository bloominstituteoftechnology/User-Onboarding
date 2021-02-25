import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components'

const StyleForm = styled.form`
padding:20px;
display:flex;
flex-direction:column;
margin:auto;
margin-top:50px;
width:200px;
border:1px solid black;
justify-content:center;
label{
    margin:10px;
}
button{
    display:flex;
    padding:10px;
    width:100px;
    margin:auto;
    background-color:green;
    color:white;
    justify-content:center;
    :disabled{
        background-color:red
    }
}
`


function Form(props){
    const {members, value, change, submit,disabled,errors} = props;

    return (
        <StyleForm onSubmit={submit}>
            <h2>hello there</h2>
            <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
            <label> Please enter your name
           <input name='name' type='text' value={value.name} placeholder="enter your name" onChange={change}/>
            </label>
            <label> Please enter your email
           <input name='email' type='email' value={value.email} placeholder="enter your email" onChange={change}/>
            </label>
            <label> Please enter your password
           <input name='password' type='password' value={value.password} placeholder="enter your password" onChange={change}/>
            </label>
            <label> Pushing this you agree with our terms of service
           <input name='terms' type='checkbox' value={value.terms} onChange={change}/>
            </label>
            <button disabled={disabled}>Submit</button>



        </StyleForm>
    )

}




export default Form;