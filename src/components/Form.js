import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  color: black;
  border: 2px solid #81d4e4;
  height: 300px;
  width: 500px;
  background-color: #ecf3fd;
  margin: 0 auto;
`;

function Form(props) {
  const { change, submit, errors, disabled } = props;
  const { name, email, password, terms, level } = props.values;

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    change(name, updatedValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  return (
    <div>
      <div className="errors" style={{ color: "red", fontStyle: "bold" }}>
        <p>{errors.name}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.terms}</p>
        <p>{errors.level}</p>
      </div>
      <WrapperDiv>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            margin: "0 auto",
          }}
          onSubmit={onSubmit}
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
          <label htmlFor="name"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
            required
          />
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
          <label htmlFor="level">What is your coding level?</label>
          <select
            onChange={onChange}
            required
            id="level"
            name="level"
            value={level}
          >
            <option value="select level">-Select A Level-</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <label>
            {" "}
            Do you accept the terms of service
            <input
              type="checkbox"
              checked={terms}
              name="terms"
              onChange={onChange}
            />
          </label>
          <button disabled={disabled} id="submitBtn">
            Submit
          </button>
        </form>
      </WrapperDiv>
    </div>
  );
}

export default Form;
