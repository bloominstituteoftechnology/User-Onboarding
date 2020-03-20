import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  const [notesState, setNotesState] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);



  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
