import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  width: 90%;
  margin: 5% auto 0%;
  border: 1px solid rgba(9, 9, 121, 1);
  border-radius: 3px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start:
  justify-content: space-evenly;
  box-shadow: 0px 1px 6px -2px rgba(9, 9, 121, 1);
  background-color: white;
`;

const FormContainer = styled.div`
  width: 90%;
  margin: 8% auto;
  border: 1px solid rgba(9, 9, 121, 1);
  border-radius: 3px;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 2.6rem;
  box-shadow: 0px 1px 6px -2px rgba(9, 9, 121, 1);
  background-color: white;
`;

const Header = styled.header`
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  border-bottom: 2px solid rgba(9, 9, 121, 1);
  background-color: white;
`;

const BodyContainer = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 5%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  background-color: white;
`;

const FormSubDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Errors = styled(motion.div)`
  color: red;
  font-size: 0.8rem;
`;

export { Card, Header, BodyContainer, FormContainer, FormSubDiv, Errors };
