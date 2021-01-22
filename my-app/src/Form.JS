import React, { useState } from 'react'

export default function Form(props){
    const [agree, setAgree] = useState(false)

    const checkboxHandler = () => {

        setAgree(!agree)

    }

    
    const { values, update, submit} = props

    const onChange = e =>{
        const name =e.target.name
        const value = e.target.value

        update(name, value)
    }
    

    const onsubmit = e =>{
        e.preventDefault()

        submit()
    }

    return (
        <form classname= 'form container' onsubmit={onsubmit}>
            <div classname='form-group inputs'>
                <label> Name 
                    
                         <input
                         name='username'
                         type='text'
                         placeholder='enter username'
                         maxLength='30'
                         value={values.username}
                         onChange={onChange} />
                    
                </label>
                
                
                <label>Email
         
              <input
                name='email'
                type='email'
                placeholder='enter email'
                maxLength='30'
                value={values.email}
                onChange={onChange} />
                </label>

                <label>Password
         
              <input
                name='password'
                type='text'
                placeholder='enter password'
                maxLength='30'
                value={values.password}
                onChange={onChange} />
                </label>

                <input type='checkbox' 
                id='agree' 
                onChange={checkboxHandler}/>

                <label hmtlFor='agree'> I agree to <b>terms and contions</b>
                </label>


            
            <button class='submitbtn' disabled= {!values.username || !values.email || !values.password}> Add new user</button>
            </div>





        </form>




    )
}

