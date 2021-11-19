import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";

const Container = styled.div`
  with: "100%";
  max-with: "980px";
  margin: auto;
  display: auto;
  grid-template-colums: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: "20px";
`;

const Categories = () => {
  //----------------------------------------------------------

  const [itemsb, setItemsb] = useState(null);

  useEffect(() => {
    buscarSliders();
  }, []);
  //----------------------------------------------------------
  async function buscarSliders() {
    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "categoria",
        }),
      });

      let json = await response.json();
      setItemsb(json);
      // console.log(json);
    } catch (error) {
      //  console.log("223");
    }
  }

  //----------------------------------------------------------
  return (
    <Container>
      {itemsb &&
        itemsb.map((item) => <CategoryItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Categories;
