import logo from './logo.svg';
import './App.css';
//- [ ] Name
//- [ ] Email
//- [ ] Password
//- [ ] Terms of Service (checkbox)
//- [ ] A Submit button to send our form data to the server.

// Task 1: Set up Project
// This project is a continuation of the work you have done previously.

//  CD into your old project
//  Continue to make changes and push to the same branch
//  Install Cypress with npm. npm install cypress --save-dev
//  run npx cypress open, After a moment, the Cypress Test Runner will launch.
//  Locate the integration folder at cypress/integration in your code editor
//  Create a form_test.js file.
//  Watch the Cypress Test Runner update the list of specs.
//  Launch Cypress in interactive mode.

function App() {
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
    </div>
  );
}

export default App;
