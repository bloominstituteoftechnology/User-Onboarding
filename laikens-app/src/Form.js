function Form (props){

  const {onChange} = props
  const { name, password, email, serviceTerms } = props;
  return (
    <div>
      <form >
        <input
         onChange={onChange}
          placeholder="First Name"
          id="firstNameInput"
          name="firstName"
          type="text"
        />
        <br />
        
        <input
          onChange={onChange}
          placeholder="Email"
          id="emailInput"
          name="Email"
          type="Email"
        />
        <br />
        
        <input
         onChange={onChange}
          placeholder="password"
          id="passwordInput"
          name="password"
          type="text"
        />
        <br  />
        
        <label> service Terms
        <input 
        type="checkbox"
         name="serviceTerms"
   />
         </label>
         <br  />
         

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default Form;