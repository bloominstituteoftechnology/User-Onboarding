import React from 'react'
import styled from 'styled-components'

// Styles
const FormContainer = styled.form`
    font-family: 'DotGothic16', sans-serif;
    width: 50%;
    margin: auto;
    font-size:2rem;
    outline: 1px solid black;
    color:white;    
`

const FillBox = styled.div`
    padding: 1rem;
`

const Line = styled.div`
    padding: 0 1rem;
`

const FormName = styled.label`
    margin: 1rem 0;
`

const Input = styled.input`
    margin-top: 1rem;
    margin-left: 1rem;
    width: 50%;
    height: 1.5rem;
`

const Check = styled.input`
    margin: 1rem;
`

const GoDownTheRabbitHole = styled.button`
    display: block;
    margin: 0 auto 2rem;
    background-color: red;
    font-weight: bold;
    font-family: 'DotGothic16', sans-serif;
    font-size: 1.5rem;
    border-radius: 20px;
`

const ErrorNotice = styled.div``



const Form = props => {

    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        console.log(`submit`)
        submit(values)
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = 
            type === "checkbox"
            ? checked
            : value
        change(name, valueToUse)
    }

    return (
        <FormContainer onSubmit={onSubmit}>
            <FillBox>
                <ErrorNotice>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </ErrorNotice>
                <Line>
                    <FormName>Name:</FormName>
                    <Input 
                        name="first_name" 
                        type="text"
                        placeholder="Neo"
                        value={values.first_name}
                        onChange={onChange}
                    />
                </Line>
                <Line>
                    <FormName>Email Address:</FormName>
                    <Input 
                        name="email" 
                        type="email"
                        placeholder="theone@insidethematrix.com"
                        value={values.email}
                        onChange={onChange}
                    />
                </Line>
                <Line>
                    <FormName>Password:</FormName>
                    <Input 
                        name="password" 
                        type="password"
                        placeholder="There is no spoon"
                        value={values.password}
                        onChange={onChange}
                    />
                </Line>
                <Line>
                    <Check 
                        name="tos" 
                        type="checkbox"
                        onChange={onChange}
                        checked={values.tos}
                    />
                    <FormName>I'm ready to go down the rabbit hole. I'm taking the red pill.</FormName>
                </Line>
            </FillBox>
            <GoDownTheRabbitHole disabled={disabled}>
                I'm ready, Morpheus.
            </GoDownTheRabbitHole>
        </FormContainer>
    )
}

export default Form