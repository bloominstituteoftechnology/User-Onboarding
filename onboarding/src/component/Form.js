import React from "react";

export default function Form(props) {
 
    const {
        submit,
        errors,
        values,
        changes
    } = props

const onSubmit = e => {
e.preventDefault()
submit()
}




const onChange = e => {
    const {name, checked, type} = e.target.value
  
    const check = type ===  'checkbox' ? checked : values
    changes(name, check)
    console.log(e.target.value)
}

    return(
        
<form onSubmit={onSubmit}>

    <div className='username'> 
         <label>Username

            <input
            value={values.username}
            onChange={onChange}
            placeholder='User Name'
            type='text'
            name='username'
            required
             />

            </label>
           
         <div className='email'>
             <label>Email
              <input value={values.email}
            onChange={onChange}
            placeholder='Email Address'
            type='text'
            name='email'
            required
             />
            </label>
            </div>            
           
        <div className='Terms'>
            <label href="#">Terms Of Condition</label> 
            <input
            
            type='checkbox'
            onChange={onChange}
            name='termsOfService'
                        required />
            
        </div>
        <div className='sumbit'>
            <button type='submit'>Submit</button>
        </div>

            <div className='errors'>
            <div>{errors.username};</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfService}</div>
        </div>
        
        </div>
        </form>
    )
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <form>
//       <input
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//         placeholder="First name"
//         type="text"
//         name="firstName"
//         required
//       />
//       <input
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//         placeholder="Last name"
//         type="text"
//         name="lastName"
//         required
//       />
//       <input value={email} 
//              onChange={e => setEmail(e.target.value)} 
//              placeholder="Email address"
//              type="email"
//              name="email"
//              required
//       />
//       <input
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//         type="password"
//         name="password"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
}
