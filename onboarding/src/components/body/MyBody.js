import '../../css/index.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import AddUserForm from '../../components/forms/NewUserForm';

const MyBody = props => {
   
    return (

        <div className="myBody">
           <AddUserForm />
        </div>
    );
}

export default MyBody;
