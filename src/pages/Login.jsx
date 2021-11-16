import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Buttonx from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import { useDispatch } from "react-redux";
import signUser from "../actions/accountActions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSignIn() {
    try {
      const rec = await authServices(user, password); // BUSCA NO BANCO DE DADOS INF LOGIN E SENHA

      //INICIO IF
      if (rec === false) {
        // SE NAO ENCONTRAR DESTROI A INFORMAÇÃO NO LOCALSTORAGE
        await localStorage.removeItem("pass");
      } else {
        // SE EXISTIR CRIA UM OBJETO DE USUARIO
        const objUsuario = {
          user: rec,
        };

        // JWT.sign(
        //   //CRIA UM TOKEN COM EMAIL EMBUTIDO
        //   {
        //     iss: "ead-api",
        //     sub: objUsuario,
        //     exp: Math.floor(Date.now() / 1000) + 360,
        //   },
        //   "09722011km",
        //   { algorithm: "HS256" },
        //   function (err, token) {
        //     if (err) {
        //       throw new Error("ERR_INVALID-TOKEN");
        //     }
        localStorage.setItem("pass", rec);
        //     //console.log(JSON.parse(atob(token.split(".")[1])));
        //   }
        // );

        await dispatch(signUser(objUsuario)); //DISPARA O EVENTO PARA REDUX
        navigate("/");
      }
      //FIM BLOCO IF
    } catch (error) {}
  }
  return (
    <Container>
      <Wrapper>
        <Title>ENTRAR</Title>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Buttonx
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
            // onclick={navigate("/")}
          >
            Entrar
          </Buttonx>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
