import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

/*
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
*/
// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })}
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0px" })}
// `;
// const Option = styled.option``;

const ProductList = () => {
  const [titulo, setTitulo] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const res = url.split("?");

    setTitulo(res[1]);
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Top>
        <Title>{titulo}</Title>
      </Top>

      <FilterContainer>
        <Filter></Filter>
      </FilterContainer>
      <Products />

      <Footer />
    </Container>
  );
};

export default ProductList;
