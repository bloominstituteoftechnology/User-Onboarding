import React, {useState, useEffect} from 'react';
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
  name: yup.string().required('name is required').min(2, 'user needs to be 2 chars min'),
  radio: yup.string().oneOf(['radio-1', 'radio-2'], 'you must select a radio option'),
  drop: yup.string().oneOf(['drop1', 'drop2', 'drop3'], 'you must choose a dropdown option!'),
  terms_of_service: yup.boolean().oneOf([true], 'you must sell your soul!'),
});

// ==============================================
// ============================================

const Form = () => {

  const [form, setForm]         = useState(init_form);
  const [disabled, setDisabled] = useState(true);

  // ============================================

  const onGet = (event) => {
    console.log('GET');
    event.preventDefault();
    axios.get('http://localhost:5000/friends')
      .then((response) => {
        const body = response.data;
        console.log(body);
      });
  };

  // ============================================

  const onPost = (event) => {

    const obj = {
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
    axios.post('http://localhost:5000/friends', obj)
      .then((response) => {

        console.log('response from POST request!');

        const body = response.data;
        console.log(body);
      });
  };

  // ============================================

  const onChange = (event) => {

    const { checked, type, name, value } = event.target;
    if ( type == 'checkbox' )
      setForm( {...form, [name]: checked} )
    else
      setForm( {...form, [name]: value} );
  };

  // ============================================

  useEffect(() => {
    schema.isValid(form).then( (valid) => {
      
      console.log('valid: ', valid);
      setDisabled(!valid);
    } )
  }, [form]);

  // ============================================

  return (
    <div>
      <button onClick={onGet}>Get Data</button>

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
          <option value="drop1">Drop 1</option>
          <option value="drop2">Drop 2</option>
          <option value="drop3">Drop 3</option>
        </select>

        {/* <input type="submit" onSubmit={onSubmit} /> */}
        <button disabled={disabled}>Post Data</button>
      </form>
    </div>
  );
};

export default Form;