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
