import logo from './logo.svg';
import './App.css';
import Form from '../component/Form';

function App() {   
  return (
    <div className="App">
      <Form/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
