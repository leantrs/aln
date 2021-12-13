//import { Add, Remove } from "@material-ui/icons";
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
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

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

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

const ProductPrice = styled.div`
  font-size: 30px;
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
  width: 100%;
  padding: 5px;
  background-color: black;
  color: white;
  font-weight: 300;
  border-radius: 10px;
`;
const Buttonx = styled.button`
  width: 100%;
  padding: 5px;
  background-color: green;
  color: white;
  font-weight: 300;
  border-radius: 10px;
  opacity: 0.5;
`;

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

  //const account = useSelector((state) => state.account.user);

  const userx = JSON.stringify(localStorage.getItem("pass"));

  useEffect(
    () => {
      //console.log(account);
      krn();
    }, // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (userx === "20" || userx === "null") {
        // console.log("invalido");
      } else {
        setEstado(true);
        pegarEmail();
        //  console.log("valido");
      }
    }, // eslint-disable-next-line
    [estado2 === true]
  );

  async function krn() {
    const keys = Object.keys(localStorage);
    const rec = keys.filter(checkar);
    setItt(rec);
    //----------------------------------------------------
    // pegar todos itens do localStorage menos "pass"
    function checkar(k) {
      return k !== "pass";
    }
    //----------------------------------------------------

    //----------------------------------------------------
    // percorre o local storage e pega todos os itens do carrinho
    const recx = rec.map((item) => {
      return JSON.parse(localStorage.getItem(item));
    });
    //----------------------------------------------------

    let valor = 0;
    let quantidade = 0;

    //----------------------------------------------------
    // calcular o valor e a quantidate
    recx.forEach((item) => {
      valor += item.valor;
      quantidade += item.total;
    });

    setSoma(valor);
    setQuantidade(quantidade);
    //---------------------------------------------------

    if (recx !== null) {
      dispatch(cartkrn(recx));
      setTeste(Array.from(recx));
    }
    //---------------------------------------------------
    //ativa o estado2 para true (sera possivel resgar o email)
    setEstado2(true);
    //---------------------------------------------------
  }

  async function pegarEmail() {
    const userx = await JSON.stringify(localStorage.getItem("pass"));

    const teste = JSON.parse(atob(userx.split(".")[1]));
    setRec(teste);

    console.log(teste);

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

        let reca = json[0]; // gera o codigo para pagseguro

        window.location.href =
          "https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=" +
          reca;

        itt.map((item) => {
          localStorage.removeItem(item);
          return item;
        });
      } else {
        navigate("/Login");
      }
    } catch (error) {
      console.log("225");
    }
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

          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
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
                        <b>ID:</b> {item.id}
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
                      {/* <Remove onClick={() => setCount(count - 1)} />
                      <ProductAmount>{count}</ProductAmount>
                      <Add onClick={() => setCount(count + 1)} /> */}
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
          {/* <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem> */}
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>R$ {soma}</SummaryItemPrice>
          </SummaryItem>
          <Button onClick={handleSignIn1}>COMPRAR</Button>
        </Summary>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
