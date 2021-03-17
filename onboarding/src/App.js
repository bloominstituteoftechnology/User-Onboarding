
import { useState } from 'react';
import './App.css';
import Form from './component/Form'


const formValue = {
  username:'',
  email:'',
  password:'',
  termsOfService: false

}

const postDataError ={
  username:'',
  email:'',
  password:'', 
  termsOfService: false
}

const postData = []


export default function App(){
  const [post, setpost] = useState(postData)
  const [formValues, setFormValues] = useState(formValue)
  const [postError, setPostError] = useState(postDataError)


const postDataState = newPost => {

}

const postChange = (name, value) => {
  setFormValues({
    ...formValues,
      [name]: value})
}

const postSubmit = () => {
  const newPost = {
    username: formValue.username.trim(),
    email: formValue.email.trim()
    
  }
}
 return(
   <div className='maincontainer'>
     <header><h1>Welcome</h1></header>
     <h3>Sign Up</h3>
     <Form
     submit={postSubmit}
     errors={postError}
     values={formValue}
     changes={postChange}
     />


     
   </div>
 )



}