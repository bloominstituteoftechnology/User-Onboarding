import "./App.css";
import Form from "./components/Form";

function App() {
  const submit = (e) => {
    console.groupCollapsed("handleChange()");
    console.log(e);
    console.groupEnd();
  };

  return (
    <div className="App">
      <Form submit={submit} />
    </div>
  );
}

export default App;
