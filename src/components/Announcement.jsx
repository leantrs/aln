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

const Desc = styled.p`
  margin: 20px 0px;
`;

const Announcement = () => {
  //return <Container>OS MELHORES PRODUTOS EM UM UNICO LUGAR!</Container>;
  return (
    <Container>
      <Desc>SINTA O PODER NOS SEUS PÉS</Desc>
    </Container>
  );
};

export default Announcement;
