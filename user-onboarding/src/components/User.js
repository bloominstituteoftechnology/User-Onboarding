import React from 'react'

import styled from 'styled-components';

const StyledUser = styled.div `
    display: flex;
    justify-content: space-evenly;

    color: white;
    background-color: slategray;

    border: 3px solid black;
    border-radius: 8px;
    
    width: 30%;
    margin: 2%;
    padding: 1%;

    
`

export default function User({details}){
    if(!details){
    return <h3>Fetching user details...</h3>
    }

    return (
        <StyledUser className='user-container'>
            <div>
                <h2>{details.username}</h2>
                <p>Email: {details.email}</p>
                <p>Password: {details.password}</p>
            </div>
        </StyledUser>
    )
}