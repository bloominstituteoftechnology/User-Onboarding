import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import Axios from 'axios';



const [users, setUsers] = useState([]);

    useEffect(() => {
        if(props.status) {
            setUsers([...users, props.status])
        }
    }, [props.status])
   
   
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }
    
    
      return (
        
            <div className='form'>
                <Form>
                    <div>
                        <Field
                            type='text'
                            name='name'
                            placeholder='Name'
                        />
                    </div>
                    
                    <div>
                        <Field
                            type='email'
                            name='email'
                            placeholder='Email address'                        
                        />
                        
                    </div>
                    
                    <div>
                        <Field
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    
                    <div>
                        <label className='terms'>
                        <Field
                            type='checkbox'
                            name='terms'
                            checked={values.terms}
                            onChange={onChange}
                        />
                        <p>Terms of Service</p>
                        </label>
                        
                    </div>
    
                    <button type='submit'>Submit</button>
                </Form>
                {users.map(user => {
                    return (
                        <p>{user.name}, {user.email}</p>
                    )
                })}
            </div>
        )
    