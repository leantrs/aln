import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: DarkGreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>OS MELHORES PRODUTOS EM UM UNICO LUGAR!</Container>;
};

export default Announcement;
