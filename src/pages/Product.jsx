import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sliderx from "../components/Sliderx";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 12px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 20px;
`;

const Pricex = styled.span`
  font-weight: 60;
  font-size: 25px;
  color: red;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  color: black;
  background: white;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  display: flex;
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
toast.configure();
const Product = () => {
  const [itemsf, setItemsf] = useState("");
  const [itemsm, setItemsm] = useState("");
  const [itemsk, setItemsk] = useState("");
  const [itemsr, setItemsr] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [estado, setEstado] = useState(false);

  useEffect(
    () => {
      setEstado(false);

      link();
    }, // eslint-disable-next-line
    [estado]
  );

  async function link() {
    const url = window.location.href;
    const res = url.split("?");

    if (res[1] !== undefined) {
      buscarSliders(res[1]);
      buscarProdutostam(res[1]);
      buscarProdutosimg(res[1]);
    }
  }

  async function buscarSliders(rec) {
    if (rec === undefined) {
      rec = "geral";
    }

    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "produtosolo",
          fornc: rec,
        }),
      });

      let json = await response.json();

      if (json === "error") {
      } else {
        setItemsf(json);
        buscarSubCategoria(json[0].titulo);
      }
    } catch (error) {
      if (itemsf !== null) {
      }
    }
  }

  async function handleSignIn() {
    if (tamanho === "") {
      //alert("Olá! Escolha o tamanho antes de continuar. ");
      toast.warn("Escolha o tamanho antes de continuar");
    } else {
      try {
        let soma = itemsf[0].valor * count;

        const itemx = {
          id: itemsf[0].id,
          titulo: itemsf[0].titulo,
          fornecedor: itemsf[0].fornecedor,
          valor: soma,
          valororiginal: Number(itemsf[0].valor),
          img: itemsf[0].img,
          total: count,
          tamanho,
          ref: itemsf[0].ref,
        };

        const armaz = JSON.stringify(itemx);
        localStorage.setItem(itemsf[0].id, armaz);

        navigate("/Cart");
      } catch (error) {}
    }
  }

  async function buscarSubCategoria(rec2) {
    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "subcategoria",
          fornc: rec2,
        }),
      });

      let json = await response.json();

      if (json === "error") {
      } else {
        setItemsm(json);
      }
    } catch (error) {
      if (itemsm !== null) {
      }
    }
  }

  async function buscarProdutosimg(rec) {
    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "produtosImg",
          fornc: rec,
        }),
      });

      let json = await response.json();

      if (json === "error") {
      } else {
        setItemsr(json);
      }
    } catch (error) {
      if (itemsf !== null) {
      }
    }
  }

  async function buscarProdutostam(rec3) {
    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "produtosTam",
          fornc: rec3,
        }),
      });

      let json = await response.json();

      if (json === "error") {
      } else {
        setItemsk(json);
      }
    } catch (error) {
      if (itemsk !== null) {
      }
    }
  }

  async function handleSignIn2(rec) {
    setEstado(true);
    // eslint-disable-next-line
    navigate("/Product" + "?" + rec);
    link();
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Top>
        <Title>{itemsf && itemsf.map((item) => item.fornecedor)}</Title>
      </Top>
      <Sliderx
        key={itemsr && itemsr.map((item) => item.imagem)}
        item={itemsr && itemsr.map((item) => item.imagem)}
      />

      <Wrapper>
        <InfoContainer>
          <Title>{itemsf && itemsf.map((item) => item.titulo)} </Title>
          <Desc>- Cod: {itemsf && itemsf.map((item) => item.ref)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.descr)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.ingredientes)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.forma_do_produto)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.como_usar)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.tipo_de_pele)}</Desc>
          <Desc>- {itemsf && itemsf.map((item) => item.sobre_este_item)}</Desc>
          <Pricex>Por Apenas: </Pricex>
          <Price>R$ {itemsf && itemsf.map((item) => item.valor * count)}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>

              {itemsm &&
                itemsm.map((item) => (
                  <FilterColor
                    item={item}
                    key={item.produtoID}
                    color={item.bg}
                    onClick={() => handleSignIn2(item.produtoID)}
                  />
                ))}
            </Filter>
            {
              <Filter>
                <FilterTitle>Tam</FilterTitle>
                <FilterSize
                  onChange={(event) => setTamanho(event.target.value)}
                >
                  <FilterSizeOption> </FilterSizeOption>
                  {itemsk &&
                    itemsk.map((item) => (
                      <FilterSizeOption>{item.tamanho}</FilterSizeOption>
                    ))}
                </FilterSize>
              </Filter>
            }
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => setCount(count - 1)} />
              <Amount>{count}</Amount>
              <Add onClick={() => setCount(count + 1)} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleSignIn}>ADICIONAR</Button>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
