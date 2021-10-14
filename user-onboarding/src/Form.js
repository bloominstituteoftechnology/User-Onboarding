import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt =>{
          evt.preventDefault()
          submit()
      }

      const onChange=evt =>{
          const{name,value,checked,type} = evt.target;
          const valueToUse = type === 'checkbox' ? checked: value;
          change(name, valueToUse)
      }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add your info</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.service}</div>
                </div>
            </div>
            <div>
                <h4>Add your info</h4>
                <label>Name
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    ></input>
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    ></input>
                </label>

                <label>Password
                    <input type='password'
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    ></input>
                </label>

                <label>Terms of service
                    <input
                        type="checkbox"
                        name="service"
                        onChange={onChange}
                        checked={values.service}
                    />
                </label>

            </div>
        </form>
    )


}