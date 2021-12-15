import React from "React";

export default function Form({ newUser }) {
  const handleChange = () => {};

  return (
    <div>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={newUser.first_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={newUser.first_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="termsOfService"
            checked={newUser.termsOfService}
            onChange={handleChange}
          />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
}
