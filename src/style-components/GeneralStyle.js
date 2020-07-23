import styled from 'styled-components'

const AppStyles = styled.div`
   font-family: Georgia;

   h1 {
       color: white;
       background-color: black;
       width: 50%;
       padding: 5% 0%;
       margin: 1% 25%;
       border-radius: 25%;
   }

    .form-input {
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .errors {
        color: crimson;
        font-style: italic;
    }

    label {
        padding: 2%;
    }

    button {
        background-color: black;
        color: white;
        width: 10%;
        border-radius: 25%;
        padding: 1%;
        margin: 1%;
    }
`
export default AppStyles