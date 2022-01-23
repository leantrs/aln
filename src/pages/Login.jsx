import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Buttonx from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import { useDispatch } from "react-redux";
import signUser from "../actions/accountActions";
import { Link } from "react-router-dom";

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
  width: 65%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 10px;
`;

const Buttonz = styled.button`
  display: flex;
  background-color: #db7093;
  color: white;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

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

        localStorage.setItem("pass", rec);

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
          <Link to={"/Register"} style={{ textDecoration: "none" }}>
            Nao tem uma conta? Registre-se
          </Link>
          <Buttonz
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
            // onclick={navigate("/")}
          >
            Entrar
          </Buttonz>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
