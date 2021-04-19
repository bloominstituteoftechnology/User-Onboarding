import React, { useEffect, useState } from "react";
import axios                          from "axios";
import * as Yup                       from "yup";
import OnboardingForm                 from "./components/Form/OnboardingForm";
import User                           from "./components/User/User";
import "./App.css";

const initialFormValues = {
    username: "",
    email: "",
    password: "",
    termsOfService: false,
};

const initialFormErrors = {
    username: "",
    email: "",
    password: "",
    termsOfService: false,
};

const initialUsers    = [];
const initialDisabled = true;

const formSchema = Yup.object().shape( {
                                           username: Yup
                                               .string()
                                               .required( "Required" ),
                                           email: Yup
                                               .string()
                                               .email( "Must be a valid email" )
                                               .max( 142 )
                                               .required( "Email is required" ),
                                           password: Yup
                                               .string()
                                               .min( 8 )
                                               .max( 12 )
                                               .required( "Password is required" ),
                                           termsOfService: Yup
                                               .boolean()
                                               .oneOf( [true], "You must agree to our terms of service to register" ),
                                       } );

function App () {
    const [users, setUsers]           = useState( initialUsers );
    const [formValues, setFormValues] = useState( initialFormValues );
    const [formErrors, setFormErrors] = useState( initialFormErrors );
    const [disabled, setDisabled]     = useState( initialDisabled );

    const getUsers = () => {
        axios
            .get( "https://reqres.in/api/users" )
            .then( res => {
                setUsers( res.data.data );
            } )
            .catch( err => {
                console.log( err => {
                    debugger;
                } );
            } );
    };

    const postNewUser = newUser => {
        axios
            .post( "https://reqres.in/api/users", newUser )
            .then( res => {
                setUsers( [...users, res.data] );
            } )
            .catch( err => {
                debugger;
            } );
    };

    const inputChange = ( name, value ) => {
        Yup
            .reach( formSchema, name )
            .validate( value )
            .then( valid => {
                setFormErrors( {
                                   ...formErrors,
                                   [name]: "",
                               } );
            } )
            .catch( err => {
                setFormErrors( {
                                   ...formErrors,
                                   [name]: err.errors[0],
                               } );
            } );
        setFormValues( { ...formValues, [name]: value } );
    };

    const formSubmit = () => {
        const newUser = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password,
            termsOfService: formValues.termsOfService,
        };

        postNewUser( newUser );
        setFormValues( initialFormValues );
    };

    useEffect( () => {
        getUsers();
    }, [users] );

    useEffect( () => {
        formSchema.isValid( formValues )
                  .then( valid => {
                      setDisabled( !valid );
                  } );
    }, [formValues] );

    return (
        <section id="body">
            <header>
                <h1>Welcome to the Family!</h1>
            </header>

            <OnboardingForm
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />

            {
                users.map( user => {
                    return (
                        <User key={user.id} details={user}/>
                    );
                } )
            }
        </section>
    );
}

export default App;
