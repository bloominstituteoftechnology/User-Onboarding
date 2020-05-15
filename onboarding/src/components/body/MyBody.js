import '../../css/index.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import AddUserForm from '../../components/forms/NewUserForm';
import UserList from '../../components/userList/UserList';
import { Route } from 'react-router-dom';

const MyBody = props => {

    return (

        <div className="myBody">
            <Route exact path='/add'>
                <AddUserForm /> />
            </Route>
           

        </div>
    );
}

export default MyBody;
