//import { Add, Remove } from "@material-ui/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import cartkrn from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  display: flex;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  border-bottom: 0.5px solid lightgray;

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 80%;
  max-width: 500px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  display: flex;
  width: 100%;
  max-width: 30%;

  padding: 5px;
  background-color: black;
  color: white;
  font-weight: 300;
  border-radius: 10px;
`;
const Buttonx = styled.button`
  display: flex;
  width: 100%;
  padding: 5px;
  background-color: green;
  color: white;
  font-weight: 300;
  border-radius: 10px;
  opacity: 0.5;
`;
toast.configure();
const Cart = () => {
  const [teste, setTeste] = useState(null);
  const dispatch = useDispatch();
  const [soma, setSoma] = useState(0);
  const [estado, setEstado] = useState(false);
  const [estado2, setEstado2] = useState(false);
  const [quantidade, setQuantidade] = useState(0);
  const navigate = useNavigate();
  const [rec, setRec] = useState("Default");
  const [itt, setItt] = useState(null);

  const userx = JSON.stringify(localStorage.getItem("pass"));

  useEffect(
    () => {
      krn();
    }, // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (userx === "20" || userx === "null") {
      } else {
        setEstado(true);
        pegarEmail();
      }
    }, // eslint-disable-next-line
    [estado2 === true]
  );

  async function krn() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);
    setItt(rec);
    function checkar(k) {
      return k !== "pass";
    }
    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });

    let valor = 0;
    let quantidade = 0;

    recx.forEach((item) => {
      valor += item.valor;
      quantidade += item.total;
    });

    setSoma(valor.toFixed(2));
    setQuantidade(quantidade);

    if (recx !== null) {
      dispatch(cartkrn(recx));
      setTeste(Array.from(recx));
    }
    setEstado2(true);
  }

  async function pegarEmail() {
    const userx = await JSON.stringify(localStorage.getItem("pass"));

    const teste = JSON.parse(atob(userx.split(".")[1]));
    setRec(teste);

    return rec["email"];
  }

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    localStorage.removeItem(rec);

    await krn();
  }

  async function handleSignIn1() {
    try {
      if (estado === true) {
        const email = await pegarEmail();

        let response = await fetch("https://trs2500.ml/aln/Controller.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pass: "krn",
            email: email,
            items: teste,
          }),
        });

        let json = await response.json();

        let reca = json[0];

        window.location.href =
          "https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + reca;

        itt.map((item) => {
          localStorage.removeItem(item);
          return item;
        });
      } else {
        toast.warn("Necessario efetuar login / Nao usuario Registre-se");
        navigate("/Login");
      }
    } catch (error) {}
  }
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/");
  }
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Top>
          <Title>Meus Produtos</Title>

          <TopButton onClick={handleSignIn2}>CONTINUAR COMPRANDO</TopButton>
        </Top>

        <Bottom>
          <Info>
            {teste &&
              teste.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Produto:</b> {item.titulo}
                      </ProductName>
                      <ProductName>
                        <b>Tamanho:</b> {item.tamanho}
                      </ProductName>
                      <ProductId>
                        <b>Ref:</b> {item.ref}
                      </ProductId>
                      <ProductColor color="green" />
                      <ProductSize>quant: {item.total}</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Buttonx onClick={() => handleSignIn(item.id)}>
                        remover
                      </Buttonx>
                    </ProductAmountContainer>
                    <ProductPrice>R$ {item.valor}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            <Hr />
          </Info>
        </Bottom>
        <Summary>
          <SummaryTitle>PEDIDO</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>R$ {soma}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Quantidade</SummaryItemText>
            <SummaryItemPrice>{quantidade}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>R$ {soma}</SummaryItemPrice>
          </SummaryItem>
          <Button onClick={handleSignIn1}> COMPRAR</Button>
        </Summary>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
