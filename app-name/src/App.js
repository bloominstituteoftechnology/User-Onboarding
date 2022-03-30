import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';


const initialFormValues = {
  username: '',
  password: '',
  email:'',
  checked: false
}
function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

const handleSubmit = () => {
  
}

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: formValues})
  }

  return (
    <div className="App">
      <Form values={formValues}/>
    </div>
  );
}

export default App;
