import React, {useState, useEffect} from 'react';
import axios from 'axios';

// ==============================================
// ============================================
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
// ============================================
// ============================================

const Form = () => {

  const [form, setForm] = useState(init_form);

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

    // const obj = {
    //   "name": "johndoe",
    //   "age": "45",
    //   "email": "qwerty@q.com",
    //   "civil": "single",
    //   "hobbies": ["a", "b"]
    // };

    const obj = {
      "name": `${form.name}`,
      "age": `${form.age}`,
      "email": `${form.email}`,
      "civil": "single",
      "hobbies": ["a", "b"]
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
    else {
      setForm( {...form, [name]: value} );
      console.log(`[${name}]: ${value}`);
    }
  };

  // ============================================

  return (
    <div>
      <button onClick={onGet}>Get Data</button>

      <form onSubmit={onPost}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={onChange} />
        </label>

        <label>
          Age:
          <input type="number" name="age" value={form.age} onChange={onChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={onChange} />
        </label>

        {/* <input type="submit" onSubmit={onSubmit} /> */}
        <button>Post Data</button>
      </form>
    </div>
  );
};

export default Form;