export default function Form (props){
    const {values,update,submit,disabled,errors} = props;

    // Functions
    const onChange = evt =>{
        const {name, value, checked,type} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        update(name,valueToUse);
    }
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }



    return(
        <div className="container">
        <form onSubmit = {onSubmit}>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <label htmlFor ="name">Name:
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.name}
                        name = "name"
                    />
            </label>
                
            <label htmlFor ="email">Email: 
                <input
                    type="text"
                    onChange ={onChange}
                    value ={values.email}
                    name = "email"
                />
            </label>
                 
            <label htmlFor ="password">Password: 
                <input
                    type="text"
                    onChange ={onChange}
                    value ={values.password}
                    name = "password"
                />
            </label>
            <label>
                By clicking submit, you agree to our Terms and Conditions
                <input
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                    onChange={onChange}
                 />
                </label>
            <div className ="submit">
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
        </div>
       
    )
}