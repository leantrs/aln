import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #db7093;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Announcement = () => {
  //return <Container>OS MELHORES PRODUTOS EM UM UNICO LUGAR!</Container>;
  return <Container>UM TOQUE DE CHARME PARA AS PODEROSAS</Container>;
};

export default Announcement;
