import React from 'react'
import useForm from 'react-hook-form';
import * as yup from 'yup';

export default function Form() {
    state = {
        checkboxTorF: false
    };
    handleCheck = event => {
        this.setState({ checkboxTorF: event.target.checked})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users")
          .then((response) => {
            setUsers(response.data);
          })
          .catch((err) => console.log("error!"));
      };
      const validateForm = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(3).required(),
      });
    return (
        <form>
             <input type="text" placeholder="Name" name="name"/>
             <input type="text" placeholder="Email" name="email"/>
             <input type="password" placeholder="Password" name="password"/>
            <input type="submit"/>
            <input type="checkbox" checked={this.state.checkboxTorF} onChange={this.handleCheck}/>
    </form>
    )
}
