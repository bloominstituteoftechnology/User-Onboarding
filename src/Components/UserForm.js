import React from "react";

const Form = (props) => {
  const {
    values, 
    submit, 
    change, 
    disabled, 
    errors
  } = props

const onSubmit = evt => {

}

  return (
    <form className="form container" onSubmit> 
      <div className="form-group inputs">
        <label>
          Name
          <input 
            type='text'
            name='name'
            placeholder='Enter Name...'
            maxLength='30'
            // onChange={onChange}
            // value={}
          />
        </label>

        <label>Email
            <input 
                type='email'
                name='email'
                placeholder='Enter Email...'
                // onChange={onChange}
                // value={}
            />
        </label>
      </div>
    </form>
  );
};

export default Form;
