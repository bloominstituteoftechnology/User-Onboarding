import React, {useState} from 'react';



const Form = (props) => {

return (

<form>

<label> 
    Name
    <input type="text" name="name" />
</label>

<label> 
    Email
    <input type="email" name="email" />
</label>

<label> 
    Password
    <input type="password" name="password" />
</label>

<label> 
    Click here if you agree to the T.O.S:
    <input type="checkbox" name="terms" checked={false} />
</label>

<button>Submit</button>



</form>


)



}

export default Form;