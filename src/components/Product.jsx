import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffe4e1;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
   {
    height: 50%;

    background-color: white;
    position: absolute;
  }
`;
/*
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
*/
const Title = styled.h1`
  color: red;
  fontsize: 5px;
  margin-bottom: 20px;
`;

const Product = ({ item }) => {
  const navigate = useNavigate();
  async function handleSignIn() {
    // eslint-disable-next-line
    navigate("/Product" + "?" + item.id);
  }
  return (
    <Container onClick={(event) => handleSignIn(item.id)}>
      <Circle>
        <Title></Title>
      </Circle>
      <Image src={item.img} />
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <SearchOutlined onClick={handleSignIn} />
        </Icon>
        */}
      </Info>
    </Container>
  );
};

export default Product;
