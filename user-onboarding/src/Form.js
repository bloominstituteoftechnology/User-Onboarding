function Form (props) {
    const {value, change, submit, errors, disabled} =props;


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
        <div className= "form-container" onSubmit= {onSubmit}> 
        <form>
            <div className="error-messages">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>

            </div>
          <label>NAME
          <input 
            name="name"
            type="text"
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
            type= "text"
            onChange={onChange}
            value= {value.password}
            />
          </label>

          <label>TERMS OF SERVICE
            <input 
            type="checkbox"
            name= "termsOfService"
            checked= {value.termsOfService}
            onChange= {onChange}
            />
          </label>
        </form>
    </div>
    <div className="Submit">       
          <label>
              <button disabled= {disabled}>submit</button>
          </label>
      </div>
      </>
    )
}





export default Form