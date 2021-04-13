import React from "react";
import styled from 'styled-components'

const FooterSignature = styled.div`
margin-top:4%;
margin-bottom:15%;`

function FooterComponent (){
 
 return (
     <FooterSignature className = "foot-container">
        <h3 className = 'footer'>React Advanced Forms © 2021 . Sasha </h3>
       
    </FooterSignature>
 )
}

export default FooterComponent