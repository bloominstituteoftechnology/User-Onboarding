import React from 'react'

export default function Form(props) {
    const { values } = props;
    
    const onChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value);
    }

    return (
        <div>
            <form>
{/* TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX  */}
                <label>Username&nbsp;
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email&nbsp;
                    <input 
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password&nbsp;
                    <input 
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
{/* RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO  */}
                <div>Preference
                    <label>Part Time&nbsp;
                        <input 
                            type="radio"
                            name="wrkPref"
                            value="partTime"
                            checked={values.wrkPref === "partTime"}
                            onChange={onChange}
                        />
                    </label>
                    <label>Full Time&nbsp;
                        <input 
                            type="radio"
                            name="wrkPref"
                            value="fullTime"
                            checked={values.wrkPref === "fullTime"}
                            onChange={onChange}
                        />
                    </label>
                </div>
{/*CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX */}
                <label>Terms&nbsp;
                    <input 
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}
