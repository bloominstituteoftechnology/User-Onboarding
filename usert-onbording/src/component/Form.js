import React, {useState} from 'react';

import axios from 'axios';
import * as yup from 'yup'
const Form = () => {
const[form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
})

const changeVlaue = (event) => {
const {name, type, } = event.target

}





    return
    <div>
        <from>
            <label htmlFor="name">Name:</label>
            <input onChange={changeVlaue} name="name" type="text" id="name" placeholder="Enter your name"/>

            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email" placeholder="Enter your email"/>

            <label htmlFor="password">Password</label>
            <input  name="password" type="password" id="password" placeholder="Enter your password"/>

            <label htmlFor="terms">Terms of Service</label>
            <input name="agree" type="checkbox" id="terms"/>


        <button type={"submit"}>Submit</button>

        </from>

    </div>
}


export default Form