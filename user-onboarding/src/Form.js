function Form (props) {
    const {value, change, submit, errors, disabled} =props;
    const {first_name, email, password, termsOfService} = props.value

    const onSubmit= evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value,type, checked} = evt.target
        const valueToUse= type === 'checkbox' ? checked: value;
        change(name, valueToUse)
    }
    return (
        <>
        <div className= "form-container" > 
        <form onSubmit= {onSubmit}>
            <div className="error-messages">
                <div>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>

            </div>
          <label>NAME
          <input className="input" 
            name="name"
            type="text"
            onChange={onChange}
            value= {value.name}
          />
          </label>

          <label>EMAIL
          <input className="input" 
            name= "email"
            type= "text"
            onChange={onChange}
            value= {value.email}
          />
          </label>

          <label>PASSWORD
            <input className="input" 
            name= "password"
            type= "password"
            onChange={onChange}
            value= {value.password}
            />
          </label>

          <label>TERMS OF SERVICE
              <p className="TOS">You hereby waive all rights, priviledges, and responsibilities relating to your whereabouts from the hours of 9-5 on any given weekday, as well as your fist child...</p>
            <input className="input" 
            type="checkbox"
            name= "termsOfService"
            checked= {value.termsOfService}
            onChange= {onChange}
            />
          </label>
          <label>
             {/* <input type="submit" value="Join the Team!"/> */}
              <button disabled= {disabled}>submit</button>
          </label>
        </form>
    </div>
    <div className="Submit">       
          
      </div>
      </>
    )
}





export default Form