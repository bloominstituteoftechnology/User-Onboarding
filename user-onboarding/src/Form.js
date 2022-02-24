function Form (props) {
  const {value, change, submit, errors, disabled} =props;
   
  const onChange= (evt) => {
      const { name, value, type, checked } = evt.target
      const valueToUse = type=== 'checkbox' ? checked: value;
      change(name, valueToUse)
   }
   const onSubmit= (evt) => {
      evt.preventDefault()
      submit()
   }
    return (
        <>
        <div className="error-container">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      <div className= 'form-container'>
        <form onSubmit={onSubmit}>
          <label> NAME
            <input 
            name= "name"
            type= "text"
            onChange={onChange}
            value= {value.name}
            />
          </label>
          
          <label>EMAIL
            <input 
            name= "email"
            type= "text"
            onChange={onChange}
            value= {value.email}
            />
          </label>

          <label>PASSWORD
            <input 
            name= "password"
            type= "password"
            onChange= {onChange}
            value= {value.password}
            />
          </label>

          <label>TERMS OF SERVICE
            <input 
            name= "tos"
            type= "checkbox"
            onChange= {onChange}
            value= {value.tos}
            />
          </label>

          <button disabled={disabled}>Submit</button>

        </form>
      </div>
      </>
    )
}





export default Form