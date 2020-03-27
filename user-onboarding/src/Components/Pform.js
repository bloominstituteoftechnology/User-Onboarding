import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  flname: yup
    .string()
    .min(2)
    .required("This a required feild"),
  psize: yup.string().required("Must choose pizza size"),
  cheese: yup.boolean(),
  pepper: yup.boolean(),
  pep: yup.boolean(),
  sauce: yup.boolean(),
  special: yup.string()
});

export default function PizzaForm() {
  const [newPizza, setNewPizza] = useState({
    flname: "",
    psize: "",
    cheese: "",
    pepper: "",
    pep: "",
    sauce: "",
    special: ""
  });

  const [error, setError] = useState({
    flname: "",
    psize: "",
    // cheese: "",
    // pepper: "",
    // pep: "",
    // sauce: "",
    special: ""
  });

  const [button, setButton] = useState(true);

  const [post, setpost] = useState([]);

  useEffect(() => {
    formSchema.isValid(newPizza).then(valid => {
      console.log(valid);
      setButton(!valid);
    });
  }, [newPizza]);

  const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(yes => {
        console.log(yes);
        setError({
          ...error,
          [event.target.name]: ""
        });
      })
      .catch(no => {
        console.log(no);
        setError({
          ...error,
          [event.target.name]: no.errors[0]
        });
      });
  };

  const formSubmit = event => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then(response => {
        setpost(response.data);
        setNewPizza({
          flname: "",
          psize: "",
          cheese: "",
          pepper: "",
          pep: "",
          sauce: "",
          special: ""
        });
      })
      .catch(err => console.log(err.response));
  };

  const inputChange = event => {
    event.persist();
    const newForm = {
      ...newPizza,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    };
    validateChange(event);
    setNewPizza(newForm);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="Name">
        First and last Name:
        <input
          id="flname"
          type="text"
          name="flname"
          value={newPizza.flname}
          onChange={inputChange}
        />
        {error.flname.length > 2 ? <p>{error.flname}</p> : null}
      </label>
      <br />
      <label htmlFor="psize">
        What size would you like?
        <select id="psize" name="psize">
          <option value="small">Small</option>
          <option value="medium"> Medium</option>
          <option value="large"> Large</option>
          <option value="Large thin crust "> Large with thin crust.</option>
        </select>
      </label>
      <br />
      <fieldset>
        <label htmlFor="cheese">
          <input
            id="cheese"
            type="checkbox"
            name="cheese"
            checked={newPizza.cheese}
            onChange={inputChange}
          />
          Cheese
        </label>
        <label htmlFor="pepper">
          <input
            id="pepper"
            type="checkbox"
            name="pepper"
            checked={newPizza.pepper}
            onChange={inputChange}
          />
          Peppers
        </label>
        <label htmlFor="pep">
          <input
            id="pep"
            type="checkbox"
            name="pep"
            checked={newPizza.pep}
            onChange={inputChange}
          />
          pepperonis
        </label>
        <label htmlFor="sauce">
          <input
            id="sauce"
            type="checkbox"
            name="sauce"
            checked={newPizza.sauce}
            onChange={inputChange}
          />
          red sauce
        </label>
      </fieldset>
      <br />

      <label htmlFor="special">
        Special instructions
        <textarea
          id="special"
          type="textarea"
          name="special"
          value={newPizza.special}
          onChange={inputChange}
        />
      </label>

      <br />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button data-cy="submit" disabled={button}>
        Submit
      </button>
    </form>
  );
}
