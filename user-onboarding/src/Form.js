import React from 'react'


const Form = ( props ) => {

    const { values, update, submit, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    return (
        <form className='formContainer' data-cy='form'>
            <h2>Add a New User</h2>
            <button disabled={disabled} onSubmit={onSubmit}> submit </button>
            <br />
            <div id='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.pass}</div>
                <div>{errors.tos}</div>
            </div>
            <label>First Name
                <input
                    name='first_name'
                    type='text'
                    value={values.first_name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Last Name
                <input
                    name='last_name'
                    type='text'
                    value={values.last_name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Email
                <input
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Password
                <input
                    name='pass'
                    type='password'
                    value={values.pass}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Terms of Service
                <input
                    name='tos'
                    type='checkbox'
                    value= {values.tos}
                    onChange={onChange}
                    checked={values.tos === true}

                />
            </label>

        </form>
    )
}

export default Form

// import React from 'react'

// const EmployeeForm = ( props ) => {
//     const { values, update, submit, disabled, errors} = props

//     const onSubmit = (evt) => {
//         evt.preventDefault()
//         submit()
//     }

//     const onChange = (evt) => {
//         const { name, value, type, checked } = evt.target
//         const valueToUse = type === 'checkbox' ? checked : value
//         update(name, valueToUse)
//     }

//     return (
//         <form className='form-container' data-cy='form'>
//             <div className='form-group-submit'>
//                 <h2>Add new employee</h2>
//                 <button disabled={disabled} onSubmit={onSubmit} data-cy='submit'>Submit</button>

//                 <br/>
//                 <br/>

//                 <div className='errors'>
//                     <div>{errors.username}</div>
//                     <div>{errors.email}</div>
//                     <div>{errors.password}</div>
//                     <div>{errors.role}</div>
//                     <div>{errors.unionStatus}</div>
//                     <div>{errors.tos}</div>
//                 </div>
//             </div>

//             <div className='form-group-inputs'>
//                 <h4>Employee information</h4>

//                 <label>
//                     Username&nbsp;
//                     <input
//                         value={values.username}
//                         onChange={onChange}
//                         name='username'
//                         type='text'
//                         data-cy='Uname'
//                     />
//                 </label>

//                 <br/>
//                 <br/>

//                 <label>
//                     Email
//                     <input
//                         value={values.email}
//                         onChange={onChange}
//                         name='email'
//                         type='email'
//                         data-cy='email'
//                     />
//                 </label>

//                 <br/>
//                 <br/>

//                 <label>
//                     Password
//                     <input
//                         value={values.password}
//                         onChange={onChange}
//                         name='password'
//                         type='password'
//                         data-cy='password'
//                     />
//                 </label>

//                 <br/>
//                 <br/>

//                 <label>
//                     Role
//                     <select onChange={onChange} value={values.role} name='role'>
//                         <option value=''>--- Select an option ---</option>
//                         <option value="front end developer">Front end developer</option>
//                         <option value="back end developer">Back end developer</option>
//                         <option value="marketing">Marketing</option>
//                         <option value="project manager">Project manager</option>
//                     </select>

//                 </label>

//                 <br/>
//                 <br/>

//                 <label>
//                     Union member
//                     <input
//                         type='radio'
//                         name='unionStatus'
//                         value={'unionMember'}
//                         checked={values.unionStatus === 'unionMember'}
//                         onChange={onChange}
//                         data-cy='unionMember'
//                     />
//                 </label>

//                 <br/>
//                 <label>
//                     Non-union member
//                     <input
//                         type='radio'
//                         name='unionStatus'
//                         value={"non-unionMember"}
//                         checked={values.unionStatus === "non-unionMember"}
//                         onChange={onChange}
//                         data-cy='non-unionMember'
//                     />
//                 </label>
//                 <br/>

//                 <label>
//                     I have read, understood and agree to the terms of agreement.
//                         <input
//                             type='checkbox'
//                             name='tos'
//                             checked={values.tos}
//                             onChange={onChange}
//                             data-cy='tos'
//                         />
//                 </label>
//                 <br/>
//             </div>
//         </form>
//     )
// }
// export default EmployeeForm
