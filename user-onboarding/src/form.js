import React from "react";

export default function AppForm(props) {
const {values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) => {
     evt.preventDefault();
     submit();    
    };

    const onChange = (evt) => {
      const { name, value, type, checked } =evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };

    return (
    <form className="form-container" onSubmit={onSubmit}>
        <div className="form-group inputs">
            <div className="email">
                <label>
                    email: 
                    <input
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                    />
                </label>
            </div>

            <div className="username">
                <label>
                    username: 
                    <input
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    type="text"
                    />
                </label>
            </div>
                        

            <div className="password">
                <label>
                    password: 
                    <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                </label>
            </div>

            <div>

                <label>
                    TOS 
                    <input 
                    type="checkbox"
                    name="terms Of Service"
                    checked={values.tos}
                    onChange={onChange}
                    />
                </label>
            </div>
        </div>
                
                
        <div className="form-group submit">
            <button disabled={disabled}>submit</button>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
        </div>
    </form>
    );
};