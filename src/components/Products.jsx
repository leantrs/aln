import styled from "styled-components";
import Product from "../components/Product";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 1;
`;

const Container2 = styled.div`
  width: 50%;
  margin: 10px;

  box-sizing: border-box;

  justify-content: left;
  align-items: left;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

const Button = styled.button`
  width-max: 10%;
  background-color: #0088a3;
  color: white;
  font-weight: 300;
  border-radius: 20px;
`;

const Products = () => {
  const [itemsf, setItemsf] = useState("");
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [estado, setEstado] = useState(false);

  const pages = Math.ceil(itemsf.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  const currentItens = itemsf.slice(startIndex, endIndex);

  useEffect(
    () => {
      const url = window.location.href;
      const res = url.split("?");

      // console.log("" + res[1]);

      buscarSliders(res[1]);
    }, // eslint-disable-next-line
    [estado == false]
  );

  async function buscarSliders(rec) {
    if (rec === undefined) {
      rec = "geral";
    }

    //  console.log("" + rec);

    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "popular",
          fornc: rec,
        }),
      });

      let json = await response.json();
      setItemsf(json);
      setEstado(true);
    } catch (error) {}
  }

  return (
    <Container>
      <Container>
        {currentItens &&
          currentItens.map((item) => <Product item={item} key={item.id} />)}
      </Container>

      <Container2>
        {currentItens &&
          currentItens.map((item, index) =>
            index < pages ? (
              <Button
                item={item}
                key={item.id}
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}
              >
                {index + 1}
              </Button>
            ) : (
              ""
            )
          )}
      </Container2>
    </Container>
  );
};

export default Products;
