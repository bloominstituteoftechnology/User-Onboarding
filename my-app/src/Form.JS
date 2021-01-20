import React from 'react'

export default function Form(props){
    const { values, update, submit} = props

    const onChange = e =>{
        const name =e.target.name
        const value = e.target.value


    }
    updateForm(name, value)

    const onsubmit = e =>{
        e.preventDefault()

        submitForm()
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


            
            <button> Add new user</button>
            </div>





        </form>




    )
}

