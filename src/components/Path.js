import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    font-size: 1.6rem;
    padding: .5%;
    margin: .5%;
    border-radius: 8px;
   

    &:hover{
        background: white;
        color: green;
        border: 1px solid green;
    }
`;

const Path = () => {
    return (
        <div>
            <a href="https://github.com/J2Macwilliams/User-Onboarding">
                <Button>Code</Button>
            </a>
            <a href="https://j2macwilliams.github.io/My-Portfolio/">
                <Button>Portfolio</Button>
            </a>
            
        </div>
    )
}

export default Path