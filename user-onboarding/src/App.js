import logo from './logo.svg';
import './App.css';

// *step 1
import Form  from "./Form";

function App() {

  const initialFormValues = {
    username: "",
    email: "",
    password: "",
    terms: ""
  }

  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    {/* Giving App.js access to Form.js and assigning it props (key value pairs) here v */}
    <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      errors={formErrors}
      onChange={onChange}
    />

    </div>
  );
}

export default App;
