import styled from "styled-components";
import Product from "../components/Product";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [itemsf, setItemsf] = useState("");

  useEffect(
    () => {
      const url = window.location.href;
      const res = url.split("?");

      buscarSliders(res[1]);
    }, // eslint-disable-next-line
    []
  );

  async function buscarSliders(rec) {
    if (rec === undefined) {
      rec = "geral";
    }

    try {
      let response = await fetch(
        "http://localhost/alineleandro/Controller.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pass: "popular",
            fornc: rec,
          }),
        }
      );

      let json = await response.json();
      setItemsf(json);
    } catch (error) {}
  }

  return (
    <Container>
      {itemsf && itemsf.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
