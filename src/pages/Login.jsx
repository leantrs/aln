import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import { useDispatch } from "react-redux";
import signUser from "../actions/accountActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
   {
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
  }
`;

const Wrapper = styled.div`
  width-min: 85%;
  padding: 30px;
  background-color: #ffe4e1;
  ${mobile({ width: "75%" })}
`;

const Alert = styled.div`
  width-min: 25%;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  background-color: #b22222;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  display: flex;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #db7093;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
toast.configure();
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [estado, setEstado] = useState(1);

  async function handleSignIn() {
    try {
      const rec = await authServices(user, password); // BUSCA NO BANCO DE DADOS INF LOGIN E SENHA

      //INICIO IF
      if (rec === false) {
        // SE NAO ENCONTRAR DESTROI A INFORMAÇÃO NO LOCALSTORAGE
        toast.error("Email ou Senha nao conferem");
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
  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Register");
  }
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>ENTRAR</Title>
          <Form>
            <Input
              placeholder="email"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <Input
              type="password"
              id="pass"
              name="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={handleSignIn}>LOGIN</Button>
            {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}

            <Link onClick={handleSignIn2}>Nao tem uma conta? Registre-se</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
