import "./App.css";
import userForm from "./components/userForm";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  return (
    <div className='App'>
      <userForm />
    </div>
  );
}

export default App;
