import '../../css/index.css';

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

const MyBody = props => {
   
    return (

        <div className="myBody">
            <h3>hello !!!!!</h3>
            <Link to="/add">
                <div className="button">Add Member</div>
            </Link>
            <Link to="/" >
                <div className="button">Home</div>
            </Link>
        </div>
    );
}

export default MyBody;
