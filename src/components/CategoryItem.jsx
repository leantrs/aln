import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 200;
  border-radius: 10px;
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  async function handleSignIn() {
    // eslint-disable-next-line

    if (item.title === "Sandalia") {
      navigate("/ProductList3" + "?" + item.title);
    }
    if (item.title === "Tenis") {
      navigate("/ProductList1" + "?" + item.title);
    }
    if (item.title === "Bolsas") {
      navigate("/ProductList4" + "?" + item.title);
    }
  }
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        {/* <Link
          to={"/ProductList" + "?" + item.title}
          style={{ textDecoration: "none" }}
        > */}
        <Button onClick={handleSignIn}>VER CATALAGO</Button>
        {/* </Link> */}
      </Info>
    </Container>
  );
};

export default CategoryItem;
