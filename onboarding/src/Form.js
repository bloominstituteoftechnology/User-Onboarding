import axios from "axios";
import React, {useState, useEffect} from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("you have failed"),
    email: yup.string().email().required("you have failed again"),
    password: yup.string().required("I know your password?"),  
    benchPress: yup.string().required("it is required to tell us this"),
    pullups: yup.string().required("prove it!"),
    squat: yup.string().required("freinds dont let freinds skip leg day"),
    checkbox: yup.boolean().oneOf([true], "check properly"),
  });


export default function Form() {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      password: "",
      checkbox: "",
      benchPress:"",
      pullups: "",
      squat: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        checkbox: "",
        benchPress:"",
        pullups: "",
        squat: "",
    })

    const [submitDisable, setSubmitDisabled] = useState(true);

    const [post, setPost] = useState([]);
    useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setSubmitDisabled(!valid);
        });
     }, [formState]);
   

    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors
            });
          });
      };
      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            console.log("success", post);

            setFormState({
              name: "",
              email: "",
              password: "",
              checkbox: "",
              benchPress: "",
              pullups: "",
              squat: "",
            });
          })
          .catch(err => {
            console.log(err.res);
          });
      };

    const inputChange = (event) => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
              event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
            validateChange(event);
            setFormState(newFormData);
    }

    return(
    <div>
        <h2>FORMFORMFORMFORMFORM</h2>
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
                <input 
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p> ): null}
            </label>
            <br/>
            <label htmlFor="email">
                Email
                <input 
                id="email"
                type="text"
                name="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errors.email.length > 0 ? (<p className="error"> {errors.email}</p>) : null}
            </label>
            <br/>
            <label htmlFor="password">
                Password
                <input 
                id="password"
                type="password"
                name="password"
                value={formState.password}
                onChange={inputChange}
                />
                {errors.name.length > 0 ? (<p className="error">{errors.password}</p> ): null}
            </label>
            <br/>        
            
            <label htmlFor="benchpress">
            Do you even lift Bro?!
                <input 
                id="benchpress"
                type="text"
                name="benchPress"
                value={formState.benchPress}
                onChange={inputChange} 
                />
                {errors.name.length > 0 ? (<p className="error">{errors.benchPress}</p> ): null}
            </label>
            <br/>
            <label htmlFor="pullups">
            How many can you do?
                <input 
                id="pullups"
                type="text"
                name="pullups"
                value={formState.pullups}
                onChange={inputChange} 
                />
                {errors.name.length > 0 ? (<p className="error">{errors.pullups}</p> ): null}
            </label>
            <br/>
            <label htmlFor="squat">
            Are you in the 300 club yet?
                <input 
                id="squat"
                type="text"
                name="squat"
                value={formState.squat}
                onChange={inputChange} 
                />
                {errors.name.length > 0 ? (<p className="error">{errors.squat}</p> ): null}
            </label>
            <br/>
            <label htmlFor="checkbox">
                DO YOU AGREE!?!?!?!?
                <input 
                id="checkbox"
                type="checkbox"
                checked={formState.checkbox}
                name="checkbox"
                onChange={inputChange}
                />
                {errors.checked === false ? (<p className="error">{errors.checkbox}</p> ): null}
            </label>
            <br/>
            <pre>{JSON.stringify(post, null, 2)}</pre>

            <button disabled={submitDisable}>Submit</button>
        </form>
    </div> 
    )
}

