import React from "react";
import "./App.css";
// import Form from "../src/Components/Forms";
// import GForm from "../src/Components/GForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pform from "../src/Components/Pform";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Lambda Eats!!</h1>
        <Link to="/Pform">
          <button>Order</button>
        </Link>
        <Route exact path="/" component={Home} />
        <Route path="/Pform" component={Pform} />
      </div>
    </Router>
  );
}

export default App;
