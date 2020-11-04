import React from 'react';

const Users = (props) => {

    return (

        <div>
            <FormMaker onSubmit={submitForm}>
                <Set>
                    <label htmlFor='fullname'>Name: </label>
                    <p>
                        Name: {props.fullname}
                    </p>
                </Set>
                <Set>
                    <label htmlFor='email'>E-mail: </label>
                    <p>
                        E-mail: {props.email}
                    </p>
                </Set>
                <Set>
                    <label >Password: </label>
                    <p>
                        Password: ********
                    </p>
                </Set>                
            </FormMaker>
        </div>
    )
}

export default Users