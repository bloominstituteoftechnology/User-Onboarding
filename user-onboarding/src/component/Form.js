import React from "react";


export default function Form(props) {
    const{ change, submit, errors } = props;
    const{ name, email, password, termsOfService } = props.values;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
        
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
return (
          <div>
            <h1>New USer App</h1>
            <h2>Add a User </h2>
              <p>{errors.name}</p>
              <p>{errors.email}</p>
              <p>{errors.password}</p>
              <p>{errors.termsOfService}</p>
              <form onSubmit= {onSubmit}>
            <label>Name:
              <input
                value={name}
                onChange={onChange}
                name='name'
                type='text'
              />
            </label>
            <label>Email:
              <input
                value={email}
                onChange={onChange}
                name="email"
                type="text"
              />
            </label>
            <label>Password:
                <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                />
            </label>
            <label>Terms Of Service:
            <input
               type="checkbox"
               name="termsOfService"
               onChange={onChange}
               checked={termsOfService}
               />
            </label>
            <input type="submit" value="Create a User!" />
            </form>
         </div>
      )
}
