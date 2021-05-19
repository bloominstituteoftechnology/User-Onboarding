import React, { useState } from 'react';
import styled from "styled-components";

const FormBox = styled.div
`
display:flex;
flex-direction: column;
margin-top: 1%;
justify-content: space-around;
`



export default function Form(props){
const { users, disabled, change, submit, errors } = props




    return (
        <div>
            <FormBox>
                <label>name  
                <input name="name" value={users.name} type="text" onChange={change}/>
                </label>
                <label>email 
                <input name="email" value={users.email} type="email" onChange={change}/>
                </label>
                <label>password
                <input name="password" value={users.password} type="text" onChange={change}/>
                </label>
                <label>Terms of users
                <input name="terms" checked={users.terms} type="checkbox" onChange={change}/>
                </label>

                <button disabled={disabled} onClick={submit}>Submit New User</button>
            </FormBox>
        </div>
    )
}