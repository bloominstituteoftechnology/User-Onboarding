import react from 'react';
import './App.css';

    export default function UserForm(props)
    {
        const {values,submit,change,disabled,errors} = props;
    
        const onSubmit = evt =>{
            evt.preventDefault();
            submit();
        };
    
        const onChange = evt =>
        {
           const { name, value, checked, type } = evt.target;
            const valueToUse = type === 'checkbox' ? checked : value;
            change(name, valueToUse);
        };
    
        return (

            <form className='form container' onSubmit={onSubmit}>
                <div className='form-group submit'>
                    <h2>Input New User </h2>
    
                    
                   
    
                    <div className='errors'>
                       
                        <div>{errors.first_name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.last_name}</div>
                        <div>{errors.terms}</div>
                    </div>
                </div>
                <label> First Name </label>
                    <input
                        value={values.first_name}
                        id="first_name"                       
                        onChange={onChange}
                        name='first_name'
                        type='text'
                    />
                

                <label> Last Name </label>
                    <input
                        value={values.last_name}
                        id="last_name"
                        onChange={onChange}
                        name='last_name'
                        type='text'
                    />
                

                <label> Email </label>
                    <input
                        value={values.email}
                        id="email"
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                    <br />
                    <br />
                   
            

            <div className='form-group checkboxes'>
                
                <label> Service Terms </label>
                    <input
                        type="checkbox"
                        id="service-terms"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                <br/>
                <button className="btn_disable" disable={disabled}>submit</button>
            </div>
        </form>
    );
} 
 


  



