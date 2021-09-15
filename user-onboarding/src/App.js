import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [values, setValues] = useState([]);

  return (
    <div className="App">
      <Form values={values}/>
    </div>
  );
}

export default App;
