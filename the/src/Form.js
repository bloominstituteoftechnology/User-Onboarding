import React from 'react'

export default function Form(props){
    const{values, submit, change, disabled, errors} = props

    const onSubmit = e =>{
        e.preventDefault()
        submit()
    }

const onChange = e => {
    const {name, value, type, checked} = e.target
    const usingValue = type === 'checkbox' ? checked: value
    change(name, usingValue)
}
return (
    <form onSubmit = {onSubmit}>
        <div>
        <h2>Add Member</h2>
        <button disabled = {disabled}>Submit</button>
        <div>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfService}</div>
            <div>{errors.userAgreement}</div>
        </div>
        </div>
        <div>
            <h3>MEMBER'S INFO</h3>
            <label>Name&nbsp;
                <input
                value = {values.name}
                onChange = {onChange}
                name = 'name'
                type = 'text'
                />
            </label>
            <label>Email&nbsp;
                <input
                value = {values.email}
                onChange = {onChange}
                name = 'email'
                type = 'email'
                />
            </label>
            <label>Password&nbsp;
                <input
                value = {values.password}
                onChange = {onChange}
                name = 'passwort'
                type = 'password'
                />
            </label>
        </div>
        <div>
            <h4>Terms</h4>
            <label>Terms of service
                <input
                checked = {values.termsOfService}
                onChange = {onChange}
                name = 'termsOfService'
                type = 'checkbox'
                />
            </label>
            <label>User Agreement
                <input
                checked = {values.userAgreement}
                onChange = {onChange}
                name = 'userAgreement'
                type = 'checkbox'
                />
            </label>



        </div>






      
    </form>
)








}