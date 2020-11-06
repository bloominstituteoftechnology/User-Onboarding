import React from 'react';
import Styled from 'styled-components';

const FormMaker = Styled.div`
    display: flex,
`;

const Set = Styled.div`
    display: flex,
`;

const Users = (props) => {

    const {fullname, email} = props.data;

    return (

        <div>
            <FormMaker>
                <Set>
                    <h2>Name: </h2>
                    <p>
                        {fullname}
                    </p>
                </Set>
                <Set>
                    <h2>E-mail: </h2>
                    <p>
                        {email}
                    </p>
                </Set>
                <Set>
                    <h2>Password: </h2>
                    <p>
                        ********
                    </p>
                </Set>                
            </FormMaker>
        </div>
    )
}

export default Users