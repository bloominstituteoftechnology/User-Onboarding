import React, {useState, useEffect} from 'react';
import User from './User.js';
import axios from 'axios';
import * as yup from 'yup';

// ==============================================
// ==============================================
const init_form = {
  name: '',                // text
  age: '',                 // number
  email: '',               // text
  password: '',            // text
  terms_of_service: false, // checkbox
  radio: null,             // radio
  check1: false,           // checkbox
  check2: false,           // checkbox
  drop: ''                 // dropdown
};
// ==============================================
// ==============================================

const schema = yup.object().shape({
  name:     yup.string().required('name is required').min(2, 'user needs to be 2 chars min'),
  age:      yup.string().required('age is required'),
  email:    yup.string().required('email is required'),
  password: yup.string().required('password is required'),
  radio:    yup.string().oneOf(['radio-1', 'radio-2'], 'you must select a radio option'),
  drop:     yup.string().oneOf(['drop1', 'drop2', 'drop3'], 'you must choose a dropdown option!'),
  terms_of_service: yup.boolean().oneOf([true], 'you must sell your soul!'),
  check1:   yup.boolean().oneOf([true, false], 'you must either check or not check check1!'),
  check2:   yup.boolean().oneOf([true, false], 'you must either check or not check check1!'),
});

// ==============================================
// ============================================

const Form = () => {

  const [users, setUsers]       = useState([]);
  const [form, setForm]         = useState(init_form);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors]     = useState({name: '', age: '', email: '', password: '', terms_of_service: '', radio: '', check1: '', check2: '', drop: ''});

  // ============================================

  const onPost = (event) => {

    const user = {
      "name": `${form.name}`,
      "age": `${form.age}`,
      "email": `${form.email}`,
      "password": `${form.password}`,
      "terms_of_service": `${form.terms_of_service}`,
      "checkboxes": ['check1', 'check2'].filter(check => form[check]),
      "radio": `${form.radio}`,
      "drop": `${form.drop}`
    };

    event.preventDefault();
    axios.post('http://localhost:5000/friends', user)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  };

  // ============================================
  
  // Get users from database upon page load
  useEffect(() => {
    axios.get('http://localhost:5000/friends')
      .then((response) => setUsers(response.data));
  }, []);

  // ============================================

  useEffect(() => {
    schema.isValid(form).then( (valid) => setDisabled(!valid) )
  }, [form]);

  // ============================================

  const onChange = (event) => {

    // Check for errors:
    const setFormErrors = (name, value) => {
      yup.reach(schema, name).validate(value)
        .then(  ()    => setErrors({ ...errors, [name]: '' }) ) // succssful validation => no error
        .catch( (err) => setErrors({ ...errors, [name]: err.errors[0] }) )
    };

    const { checked, type, name, value } = event.target;
    if ( type == 'checkbox' ) {
      setFormErrors(name, checked);
      setForm( {...form, [name]: checked} );
    }
    else {
      setFormErrors(name, value);
      setForm( {...form, [name]: value} );
    }
  };

  // ============================================

  return (
    <>
      <div style={{ color: 'red' }}>
        <div>{errors.name}</div>
        <div>{errors.age}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms_of_service}</div>
        <div>{errors.radio}</div>
        <div>{errors.check1}</div>
        <div>{errors.check2}</div>
        <div>{errors.drop}</div>
      </div>

      <form onSubmit={onPost}>

        {/* name: '',                // text */}
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={onChange} />
        </label>

        {/* age: '',                 // number */}
        <label>
          Age:
          <input type="number" name="age" value={form.age} onChange={onChange} />
        </label>

        {/* email: '',               // text */}
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={onChange} />
        </label>

        {/* password: '',            // text */}
        <label>
          Password:
          <input type="text" name="password" value={form.password} onChange={onChange} />
        </label>

        {/* terms_of_service: false, // checkbox */}
        <label>
          Agree to Sell your Soul?
          <input type="checkbox" name="terms_of_service" 
            checked={form.terms_of_service} // GUI check if form: {..., terms_of_service: true, ...} 
            onChange={onChange} 
          />
        </label>

        {/* check1: false,           // checkbox */}
        <label>
          Check 1
          <input type="checkbox" name="check1" 
            checked={form.check1} // GUI check if form: {..., check1: true, ...} 
            onChange={onChange} 
          />
        </label>

        {/* check2: false,           // checkbox */}
        <label>
          Check 2
          <input type="checkbox" name="check2" 
            checked={form.check2} // GUI check if form: {..., check2: true, ...} 
            onChange={onChange} 
          />
        </label>

        {/* radio: null,             // radio */}
        <label>
          Radio 1
          <input type="radio" name="radio" value="radio-1"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-1'}               //              radio: radio-1
            onChange={onChange} 
          />
        </label>
        <label>
          Radio 2 
          <input type="radio" name="radio" value="radio-2"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-2'}               //              radio: radio-2
            onChange={onChange} 
          />
        </label>

        {/* drop: ''                 // dropdown */}
        <select name="drop" value={form.drop} onChange={onChange}>
          <option value="">Choose One!</option>
          <option value="drop1">Drop 1</option>
          <option value="drop2">Drop 2</option>
          <option value="drop3">Drop 3</option>
        </select>

        <button disabled={disabled}>Post Data</button>
      </form>

      <div>
        {
          users.map(user => {
            return (
              <User key={user.id} user={user} />
            )
          })
        }
      </div>
    </>
  );
};

export default Form;