import React from 'react'



export default function Form (props) {



    return(
        <div>
          <form className='formContainer'>
              <div className='formGroup'>
                  <h2>Lets build a FRIEND!</h2>
                  
                  <div className='errors'>

                  </div>
                  <div className='formGroup inputs'>
                      <h3>Tell me about yourself...</h3>
                      <label>Name
                          <input 
                        //   value = {values.username}
                        //   onChange={onChange}
                          name='name'
                          type='text'
                          />
                      </label>
                      <label>Email
                          <input 
                        //   value = {values.email}
                        //   onChange={onChange}
                          name='email'
                          type='text'
                          />
                      </label>
                      <label>Password
                          <input 
                        //   value = {values.password}
                        //   onChange={onChange}
                          name='password'
                          type='text'
                          />
                      </label>
                      <label>Terms of Service
                          <input 
                          value= 'agree'
                          name= 'termsOfService'
                          type= 'radio'
                        //   onChange={onChange}
                        //   checked={values.termsOfService ==='agree'}
                          />
                      </label>
                      <label>roll
                          <select 
                        //   value={valuse.roll}
                        //   onChange={onChange}
                        name='roll'>
                              <option value= ''>--Select a Roll--</option>
                              <option value= 'wizard'>Wizard</option>
                              <option value= 'rogue'>Rogue</option>
                              <option value= 'warrior'>Warrior</option>
                          </select>
                      </label>
                  </div>
                  <button >Submit</button>
              </div>
          </form>
        </div>
    )

}





