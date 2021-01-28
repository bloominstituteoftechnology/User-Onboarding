// import './App.less';
import Member from './components/Member';
import Form from './components/Form';
import * as yup from 'yup';
import schema from "./validation/formSchema";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  ///// CHECKBOXES /////
  tosAgree: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const initialMembers = [];
const initialDisabled = true;

export default function App() {
  const [members, setMembers] = useState(initialMembers); // array of member objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
  
  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then((res) => {
        setMembers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postNewMember = (newMember) => {
    axios.post('https://reqres.in/api/users', newMember)
      .then((res) => {
        setMembers([res.data, ...members]);
        })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }
  
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      }).catch((err) => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };
  
    
  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tosAgree: formValues.tosAgree, 
    }
    postNewMember(newUser)
  }
  
  useEffect(() => {
  // TODO: get members
    getMembers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {members.map((m) => {
        return <Member key={m.id} details={m} />;
      })}
    </div>
  );
}