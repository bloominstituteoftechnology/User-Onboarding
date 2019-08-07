import React from 'react';
import FormikLoginForm from './FormikLoginForm';

const FormMy = (props) => {
    
    return (
      <div >
        <FormikLoginForm users={props.users} setUsers={props.setUsers} />
    </div>
  );
};

export default FormMy;