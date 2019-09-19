import React from "react";

function Form() {
  return (
    <form>
      <input id="name" type="text" name="name" placeholder="name" />
      <input id="email" type="Email" name="email" placeholder="email" />
      <input id="password" type="password" name="password" placeholder="password" />
    <button>Submit</button>
    </form>
  );
}

export default Form;
