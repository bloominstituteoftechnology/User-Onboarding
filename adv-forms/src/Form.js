import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

const FormDiv = styled.div`
    width: 80%;
    height: 80vh;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    background-color: #acf2ef;
    margin: 0 auto;
`;

function Form() {


    return (
        <FormDiv>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text' name='name' id='name' />
                </label>
            </form>
            <form>
                <label htmlFor='email'>
                    Email:
                    <input
                        type='email' name='email' id='email' />
                </label>
            </form>
            <form>
                <label htmlFor='password'>
                    Password:
                    <input
                        type='password' name='password'
                        id='password' />
                </label>
            </form>
            <form>
                <label htmlFor='terms'>
                    Terms of Service
                    <input
                        name='terms'
                        type='checkbox'
                        checked={false} />
                </label>
            </form>
            <form>
                <input type='submit' />
            </form>
        </FormDiv>
    )
};

export default Form;