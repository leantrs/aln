import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 30px;
  background-color: white;
  color: red;
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Input = styled.input`
  border: 1px solid #dddddd;
  color: #ccccc6;
  align-items: left;
  font-size: 10px;
  margin-top: 10px;
  margin-left: 10px;
  outline: medium none;
  padding: 7px;
  width: 200px;
`;
const Buttonx = styled.button`
  display: flex;
  background-color: #ffe4e1;
  color: black;
  margin-top: 10px;
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;
  outline: medium none;
`;

function Pesquisar() {
  const navigate = useNavigate();
  const [refx, setRefx] = useState("");

  async function handleSignIn() {
    const url1 = window.location.href;
    const res1 = url1.split("/");
    const res2 = res1[3].split("?");

    if (res2[0] === "ProductList") {
      // eslint-disable-next-line
      navigate("/ProductList" + "?" + refx);
      //window.location.reload();
    } else {
      if (res2[1] === undefined) {
        // eslint-disable-next-line
        navigate("/ProductList" + "?" + refx);
      } else {
      }
    }
  }

  return (
    <Container>
      <Input
        type="text"
        value={refx}
        onChange={(event) => setRefx(event.target.value)}
      />
      <Buttonx onClick={handleSignIn}>Pesquisar</Buttonx>
    </Container>
  );
}

export default Pesquisar;
