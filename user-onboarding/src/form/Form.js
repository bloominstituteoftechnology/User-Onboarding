import React, { useState } from 'react'
import formSchema from '../formSchema'
import './styles.css'

export default function Form({ post, users, showNew }){
    const [showNewForm, setShowNewForm] = useState(showNew)
    const [error, setError] = useState({})

      const onSubmit = evt => {
        evt.preventDefault()
        const user = {}
        
        for (let i = 0; i < evt.target.length; i++) {
            const name = evt.target.elements[i].getAttribute("name")
            if (name) {
              if (name === 'termsOfService') {
                console.log('user', evt.target.elements[i].value)
                const value = evt.target.elements[i].checked
                user[name] = value 
            } else {
                const value = evt.target.elements[i].value
                user[name] = value 
            }
            }       
        }
        formSchema.validate(user).then(value => {
          console.log('WHAT?', user)
         if (value) {
          evt.target.reset()
          post(user)
          setTimeout(() => { setShowNewForm(false); }, 1000)
         }
        }).catch(err => {
          const errorObj = {
            message: err.message,
            path: err.path
          }
          setError(errorObj)
        })
        setError({})
      }
      console.log('error', error)

      const handleAddNew = () => {
        setShowNewForm(true)
      }

      const handleReturn = () => {
        setShowNewForm(false)
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        console.log('checked', checked)
      }

      return (
        showNewForm ?
        <form className='form container' onSubmit={onSubmit}>
         <div className="leaderboard">
             <div className="header">
                 <h1>Add New User</h1>
                 <button onClick={handleReturn}>Return</button>
             </div>
                 <main className="leaderboard__profiles">
                 <label className="leaderboard__name">New User Information:
                 </label>
                    <input
                       className="leaderboard__profile"
                       type="text"
                       name="firstName"
                       onChange={onChange}
                       maxLength="30"
                       placeholder="First Name"
                    />
                    {
                      error && error.path === 'firstName' ?
                      <div className="error">{error.message}</div> : null
                    }
                    <input
                       className="leaderboard__profile"
                       type="text"
                       name="lastName"
                       onChange={onChange}
                       maxLength="30"
                       placeholder="Last Name"
                    />
                    {
                      error && error.path === 'lastName' ?
                      <div className="error">{error.message}</div> : null
                    }
                    <input
                       className="leaderboard__profile"
                       type="text"
                       name="email"
                       onChange={onChange}
                       maxLength="30"
                       placeholder="Email"
                    />
                    {
                      error && error.path === 'email' ?
                      <div className="error">{error.message}</div> : null
                    }
                    <input
                       className="leaderboard__profile"
                       type="password"
                       name="password"
                       onChange={onChange}
                       maxLength="30"
                       placeholder="password"
                    />
                    {
                      error && error.path === 'password' ?
                      <div className="error">{error.message}</div> : null
                    }
                    <label>Terms Of Service
                    <input
                       className="leaderboard__other"
                       type="checkbox"
                       name="termsOfService"
                       onChange={onChange}
                       p
                    />
                    {
                      error && error.path === 'termsOfService' ?
                      <div className="error">{error.message}</div> : null
                    }
                    </label>
                     <input type="submit" name="submit" value="Submit" />
                 </main>
         </div>
       </form> :
        <div className="leaderboard">
        <div className="header">
            <h1>My Team</h1>
            <button onClick={handleAddNew}>Add New</button>
        </div>
        { users ?
            users.map(user => (
                <main className="leaderboard__profiles" key={user.id}>
                    <article className="leaderboard__profile">
                      <span className="leaderboard__name" >{`${user.firstName} ${user.lastName}`}</span>
                      <span className="leaderboard__other" >{user.email}</span>
                    </article>
                </main>
            )) : null
        }
         </div>
      )
}