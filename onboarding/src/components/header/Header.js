import '../../css/index.css';

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

const Header = props => {

    console.log(window.location.pathname);
    return (

        <header>
            <h3>My Lambda Team (webpt16)</h3>

            <Link to="/add">
                <div className="button">Add Member</div>

            </Link>
            <Link to="/" >
                <div className="button">Home</div>

            </Link>
        </header>

    );


}

export default Header;
