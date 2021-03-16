import react,{Component} from "react";

function Form (props) {
    const{
        values,
        change,
        submit,
        disabled,
        errors
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt =>{
        const{name,value} = evt.target
        change(name,value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label> Name
                <input name="name "type="text" value={values.name} onChange={onChange}/>
            </label>
            <label> Email
                <input name="email" type="text" value={values.email} onChange={onChange}/>
            </label>
            <label> Password
                <input name="password" type="text" value={values.password} onChange={onChange}/>
            </label>
            <label> Terms of Service
                <input name="terms" type="checkbox" value={values.terms} onChange={onChange}/>
            </label>
            <label> 
                <input name="submit" type="submit" value="Submit" onChange={onChange}/>
            </label>
            

        </form>
    )

}

export default Form
