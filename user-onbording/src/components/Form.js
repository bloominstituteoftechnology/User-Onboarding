import React, {useState} from "react";

export default function Form (){
    // managing state for our form inputs
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        termsOfService:""

    });
// onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
    };

    //onChange function 
    const inputChange = e =>{
        console.log("input changed!", e.target.value);
        setUser({name:e.target.value})
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name:
                <input type="text" 
                name="name" 
                id="name"
                placeholder = "Name"
                value={user.name}
                onChange={inputChange}
                />
            </label>

            <label htmlFor="email">
                Email:
                <input type="email" 
                name="email" 
                id="email"
                placeholder = "Email"
                value={user.email}
                onChange={inputChange}
                />
                </label>

                <label htmlFor="password">
                Password:
                <input type="password" 
                name="password" 
                id="password"
                placeholder = "Password"
                value={user.password}
                onChange={inputChange}
                />
            </label>
            <label htmlFor="Terms of Service">
                Terms of Service:
                <input type="checkbox" 
                name="terms of service" 
                id="terms of service"
                value={user.termsOfService}
                />
            </label>
           
            <button>Submit</button>

        </form>
    )
}