import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import signUser from "../actions/accountActions";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;
  background-color: #f5fafd;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  ${"" /* font-weight: bold; */}
  color:black;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.cart.listaCarrinho);
  //const account = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const [rec, setRec] = useState("Default");
  const [user, setUser] = useState("20");
  const [estado, setEstado] = useState(false);

  useEffect(
    () => {
      if (estado === false) {
        rsn();
        comparar();
      }
    }, // eslint-disable-next-line
    [estado]
  );

  async function rsn() {
    const userx = JSON.stringify(localStorage.getItem("pass"));
    setUser(userx);

    if (userx === "20" || userx === "null") {
      // console.log("invalido");
    } else {
      setRec(JSON.parse(atob(userx.split(".")[1])));
      // console.log("valido");
      //  console.log(userx);
      dispatch(signUser(userx));
    }

    setEstado(true);
  }

  async function handleSignIn() {
    // eslint-disable-next-line
    navigate("/Cart");
  }
  // if (estado === true) {
  //   comparar();
  // }

  async function comparar() {
    let date1 = rec["exp"];
    let date2 = new Date() - 3 * 60 * 60 * 1000;
    //let date2 = new Date();

    let dataUm = new Date(date1).getTime();
    let dataDois = new Date(date2).getTime();

    let dataBd = dataUm.toString().substr(0, 10);
    let dataAtual = dataDois.toString().substr(0, 10);

    if (estado === true) {
      if (parseInt(dataBd) > parseInt(dataAtual)) {
        console.log("token valido");
        await dispatch(signUser(user));
      } else {
        if (rec === "Default") {
          localStorage.setItem("pass", "20");
        }
        //console.log(rec);

        //await localStorage.removeItem("pass");
      }
    }
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language></Language>
          {/* <SearchContainer>
            <Input placeholder="Pesquisar" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>@lineL </Logo>
        </Center>
        <Right>
          {rec && rec["email"]}
          {/* <Link to={"/Register"} style={{ textDecoration: "none" }}>
            <MenuItem style={{ paddingLeft: 13 }}>Registrar</MenuItem>
          </Link>
*/}
          <Link to={"/Login"} style={{ textDecoration: "none" }}>
            <MenuItem style={{ paddingLeft: 13 }}>Entrar</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={Object.keys(todos).length} color="primary">
              <ShoppingCartOutlined onClick={handleSignIn} />
            </Badge>
          </MenuItem>
          <Link to={"/Login"} style={{ textDecoration: "none" }}>
            <MenuItem style={{ paddingLeft: 13 }}></MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
