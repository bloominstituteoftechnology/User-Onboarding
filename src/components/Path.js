import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    font-size: 1.6rem;
    padding: .5%;
    margin: .5%;
    border-radius: 8px;
    background-color: yellow;
    color: green;

    &:hover{
        /* background: yellow;
        color: green; */
        border: 1px solid green;
    }
`;

const Path = () => {
    return (
        <div>
            <a href="https://github.com/J2Macwilliams/User-Onboarding">
                <Button>Code</Button>
            </a>
        </div>
    )
}

export default Path