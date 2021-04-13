import React from 'react'
import styled from 'styled-components'

  

const EachTab = styled.div`
margin-top:2%;
font-size: 30px;
`
const InputBox = styled.input`
 width: 95%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
  text-align:center;

&:hover {
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}`

const SubmitButton = styled.button`
margin-top:1%;
padding:1%;
border-radius:15px;

&:hover{
background-color:goldenrod;
}`
const DropDown = styled.select`
font-size: 15px;`


export default function Form({values, onChange, newSubmitionForm, disabled, errors}){

    const onSubmit = (event) => {
        event.preventDefault()
        newSubmitionForm()
    }

     const onChangee= (e) => {
        const { name, value, type, checked } = e.target
        const values = type === "checkbox" ? checked : value
        onChange(name, values)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>

        
                <EachTab>
                    <div>{errors.first_name}</div>
                <label>First name:
                    <InputBox
                    name='first_name'
                    type='text'
                    placeholder='first name'
                    onChange={onChangee}
                    value={values.first_name}/>
                </label>
                </EachTab>

                <EachTab>
                    <div>{errors.last_name}</div>
                <label>Last Name:
                    <InputBox
                    name= 'last_name'
                    type='text'
                    placeholder='last name'
                    onChange={onChangee}
                    value={values.last_name}
                    />
                </label>
                </EachTab>

                <EachTab>
                     <div>{errors.email}</div>
                <label><div>Email:</div>
                    <InputBox
                    name='email'
                    type='email'
                    placeholder='email'
                    onChange={onChangee}
                    value={values.email}
                    />
                </label>
                </EachTab>

                 <EachTab>
                    <div>{errors.password}</div>
                <label><div>Password:</div>
                    <InputBox
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={onChangee}
                    value={values.password}
                    />
                </label>
                </EachTab>

            
                <EachTab>
                <label>Title:
                    <div>
                  <DropDown name='title' onChange = {onChangee} value= {values.title}>
                      <option value=''>--Select Role--</option>
                      <option value='Student'>Student</option>
                      <option value='Instructor'>Instructor</option>
                  </DropDown>
                  </div>
                  </label>
                  </EachTab>

                  <EachTab>
                        <div>{errors.terms}</div>
                <label><div>Terms and conditions:</div>
                    <input
                    type='checkbox'
                    />
                </label>
                </EachTab>

                  <SubmitButton disabled={disabled}>Submit</SubmitButton>
                
            </form>
        </div>
    )

}