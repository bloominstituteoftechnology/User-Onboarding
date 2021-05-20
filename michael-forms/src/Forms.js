import {useState} from "react";
import * as yup from 'yup';
import axios from "axios";

const Form = () => {
        //form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [role, setRole] = useState('');

        //used for handling the error message displayed to the screen
    const [errorMessage, setErrorMessage] = useState();

        //handles the array of users that will be displayed coming back from the axios call
    const [users, setUsers] = useState([]);

    //this handles the submit on the form
    //this sends the contents of the form (the useState fields above)  to the address given in the readme
    //we need to e.preventDefault() otherwise the form will reload the page when it tries to submit: https://www.w3schools.com/jsref/event_preventdefault.asp
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form');

        //we are going to post the data to the url given
        //the contents of the body are just the fields we have on our form sent as an object
        axios.post('https://reqres.in/api/users', {
            name,
            email,
            password,
            terms,
            role
        }).then(result=>{
            console.log(result.data);
            //take the data and add it to the array
            //using the spread operator we can combine the two arrays together
            //this is the same as taking all the existing users and adding them to a new array and then adding the new data from the axios call to the end
            setUsers([...users, result.data]);
        });
    }

    //We are using a simple schema based on the example on the yup page
    //no idea how to order these yet
    //boolean doesnt seem to do anything
    const schema = yup.object().shape({
        name: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8),
        terms: yup.boolean()
    });

    //this is called each render and checks to see if the form is valid
    //if the form is not valid then we set the error message to be shown to the user
    //if the form is valid we clear the error message so there is nothing to show the user
    schema.validate({
        name,
        email,
        password,
        terms,
        role
        })
        .then(function (valid) {
            //if valid, then clear the error message
            if (valid) {
                setErrorMessage('');
            }
        }).catch(err=>{
            //if the form has an error then set the error message state to be shown to the user
           setErrorMessage(err.message);
    });

    return (
        <div>
            {/*for a form we have to have an onsubmit so when a submit button is pressed we can perform an action*/}
            <form onSubmit={handleSubmit}>
                {/*each field is basically the same with just a different onChange*/}
                <div>Name: <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} /></div>
                <div>Email: <input type="text" name="email" onChange={e => setEmail(e.target.value)} value={email} /></div>
                <div>Password: <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} /></div>
                <div>Terms: <input type="checkbox" name="terms" onChange={e => setTerms(e.target.checked)} value={terms} /></div>
                <div>Role: <input type="checkbox" name="role" onChange={e => setRole(e.target.checked)} value={role} /></div>
                {/*this is the error message we are going to show to the user if the value exists*/}
                <div>{errorMessage}</div>
                {/*this is our submit button that is used to call the onSubmit from the form above*/}
                <div><input type="submit" value="Submit"/></div>
            </form>

            <div>
                <h2>Users</h2>
                {/*here we just loop through the users and display them to the screen like we did with the cards*/}
                {users.map(user=>{
                    return (
                        // the console in the browser was yelling because we  didnt have a key, the result  from the axios call seemed to add a createdAt field that was unique so I used that
                        // the instructions said to use a <pre>
                        <div key={user.createdAt}><pre>{JSON.stringify(user)}</pre></div>
                    );
                })}
            </div>
        </div>
    );
};

export default Form;
