//*Imports*//
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import UserList from './UserList';

function Form(props){
//*State*//
  const blankUser = {name: '', email: '', password: '', terms: false,}; //this here allows me to use to reset
  const [ user, setUser ] = useState(blankUser);
    // console.log(user); //*
  const [ errorState, setErrorState ] = useState(blankUser); //TODO: useState when passed a variable doesn't need {} for object. the vairable ISSSSS an object.
  //state for axios get from my api
  const [ userList, setUserList ] = useState([]);
        console.log(userList);
  const [ button, setButton ] = useState(true); //disabled = true = IS disabled. //TODO: disable until form is valid

//*Functions*//
  function validate(e){
    const thing = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
//yup have this method called .reach() which takes two arguments. The THING we are reaching into [ie cookie jar, in this case it is our formSchema], and 2. the thing we are validating [the cookie we are rummaging around for]. These two things are separated by a comma.[here because we passed in the event object we will use that to look for the name of the target of the event]
//'hey, yup! Reach into forSchema looking for e.target.name. When you get it validate it against e.target.value's data.'
    yup
      .reach(formSchema, e.target.name)
      .validate(thing)
      .then( valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ''
        })
      })
      .catch( err => {
        console.log(err.errors)
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0] //*I don't understand that this line of code does. What is an array? What is at index 0?
        })
      })
  }

  function onChange(e){
    //e.persist(); //set it and forget it? I don't understand what this does. //TODO no longer neededd? Depricated with v17? see https://reactjs.org/docs/events.html
    validate(e); //this is calling my validate function that I created above and passing it the e obj so that it can access that data as well.
    const thing = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
    setUser({...user, [e.target.name]: thing});
  }

  function onSubmit(e){
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', user) //arg 1. Where do you want your data to go? arg 2. What do you want to go there? (needs to be obj?)
      .then(res => {
        setUserList([...userList, res.data]);
      })
      .catch(err => {
        console.log(err);
      })
    //on submit setState for USER back to original state held in const blankUser.
    setUser(blankUser);
    //on submit setState for ERROR back to original state held in const blankUser.
    setErrorState(blankUser);
  }

  const formSchema = yup.object().shape({
    name: yup.string().required('What, are you in witness protection? WHO ARE YOU!?'),
    email: yup.string().email('you call THAT an email...? Try again, or keep going cause what you have now, doesn\'t work!').required('I know, I know, I hate spam too, but just let me send you a littttttle.'),
    password: yup.string().required('We all get locked out. Don\'t worry you can reset it sometime'),
    terms: yup.boolean().oneOf([true], 'Not so fast Mister/Mistress! You\'ve got to agree to our terms'), //TODO error not working, being told final value was 'on' I want it to be true/false
  });


//*button able*//
// useEffect(()=>{ //TODO: scheduling future behavior conditional on...

  formSchema.isValid(user).then( (bool)=>{
    console.log(bool);
    setButton(!bool)
  })

// console.log(formSchema.isValue(user));
// }, [user]) //array rechecks every ______certain thing.


//*Component Return*//

  return (
    <>
      <form onSubmit={onSubmit} action="">
        <label htmlFor="name">
          {"Name: "}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your sweet sweet name here"
            onChange={onChange}
            value={user.name}
          />
          {errorState.name.length > 0 ? <p>{errorState.name}</p> : null}
        </label>

        <br />
        <label htmlFor="email">
          {"Email: "}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="That electronic P.O. of yours please."
            onChange={onChange}
            value={user.email}
          />
          {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}
        </label>
        <br />
        <label htmlFor="password">
          {"Password: "}
          <input
            type="text"
            id="password"
            name="password"
            placeholder="shhhhh this is a secret!"
            onChange={onChange}
            value={user.password}
          />
          {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
        </label>
        <br />
        <label htmlFor="">
          {"Terms of Service:"}
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={user.terms}
            onChange={onChange}
          />
          {errorState.terms.length > 0 ? <p>{errorState.terms}</p> : null}
        </label>
        {/* add property disabled={button} to the button below if you want to set disabled based on criteria above. uncomment the button state */}
        <button type="submit" disabled={button}>Submit</button>
      </form>
      <UserList userList={userList}/>
    </>
  );
}

export default Form;