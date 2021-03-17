const initialFormsValues = {
    firstName: "",
    Email: "",
    Password: "",
  };
  
  export default function Form() {
    const [newUser, setNewUser] = useState(users);
    const [formValues, setFormValues] = useState(initialFormsValues);
  
    const postNewUser = (newUser) => {
      axios.post("http://regres.in/api/users", newUser)
      .then((res) => {
        setNewUser([res.data,...user]);
        console.log("Api success", res.data);
        setFormValues(initialFormsValues)
      })
      .catch((err)=>{
        console.log("error", err)
      })
    }
    const submit = (e) => {
      e.preventDefault();
    
  
      const toBeUpdated = { ...user };
      toBeUpdated.firstName = formValues.firstName;
      toBeUpdated.Email = formValues.Email;
      toBeUpdated.Password = formValues.Password;
      setFriend(toBeUpdated);
      setFormValues(initialFormsValues);
    }
    const Change = (e) => {
      const { name, value } = e.target;
      setFormValues((previousFormValues) => ({
        ...previousFormValues,
        [name]: value
      }));
    };
  
    const newFriend = {
      id: uuidv4(),
      firstName: formValues.firstName,
      Email: formValues.Email,
      Password: formValues.Password,
    };
    postNewUser(newUser)
    setFormValues(initialFormsValues)
    
    setNewUser(user.concat(newUser))
    setFormValues(initialFormsValues)
  
    return (
      <div>
        <form onSubmit={submit}>
          <input
            onChange={Change}
            value={formValues.firstName}
            placeholder="First Name"
            id="firstNameInput"
            name="firstName"
            type="text"
          />
          <input
            onChange={Change}
            value={formValues.Email}
            placeholder="Email"
            id="emailInput"
            name="Email"
            type="Email"
          />
          <input
            onChange={Change}
            value={formValues.Password}
            placeholder="password"
            id="passwordInput"
            name="password"
            type="text"
          />
          <button type="submit">submit</button>
        </form>
        {user.map((users, idx) => (
          <div style={{ border: ".15rem solid black" }}key={idx}>
            <h3>{users.firstName}</h3>
            <p>{users.Email}</p>
            <p>{users.Password}</p>
          </div>
        ))}
      </div>
    );
  }
  