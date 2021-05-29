import React from 'react';
import axios from 'axios';
import * as yup from 'yup';

function Form() {

    return (
        <div>
            <h1>This Is The Form</h1>
            <form>
                <label>
                    Name <input type='text'/>
                </label>
                <label>
                    Email<input type='text'/>
                </label>
                <label>
                    Password<input type='text'/>
                </label>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form