function Form (props){

  const {onChange} = props
  const { name, password, email, serviceTerms } = props.form
  const {onSubmit} = props;
  return (
    <div>
      <form name="userForm" onSubmit = {onSubmit} >
        <input
         onChange={onChange}
          placeholder="First Name"
          id="firstNameInput"
          name="firstName"
          type="text"
          value= {name}
        />
        <br />
        
        <input
          onChange={onChange}
          placeholder="Email"
          id="emailInput"
          name="Email"
          type="Email"
          value = {email}
        />
        <br />
        
        <input
         onChange={onChange}
          placeholder="password"
          id="passwordInput"
          name="password"
          type="text"
          value = {password}
        />
        <br  />
        
        <label> service Terms
        <input 
        type="checkbox"
         name="serviceTerms"
         checked= {serviceTerms}
         onChange= {onChange}
   />
         </label>
         <br  />
         

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default Form;