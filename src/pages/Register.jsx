import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 20px;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 0;
  min-width: 80%;
  margin: 20px 5px 10px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  display: flex;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #db7093;
  color: white;
  cursor: pointer;
`;

toast.configure();
const Register = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [nascimento, setNascimento] = useState("");
  const navigate = useNavigate();

  async function handleSignIn() {
    try {
      let response = await fetch("https://trs2500.ml/aln/Controller.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: "registrar",
          clienteNome: nome,
          clienteEndereco: endereco,
          clienteNumero: numero,
          clienteBairro: bairro,
          clienteEstado: estado,
          clienteCidade: cidade,
          clienteCEP: cep,
          clienteDocumento: documento,
          clienteSenha: senha,
          clienteConfirmacaoSenha: confirmacaoSenha,
          clienteEmail: email,
          clienteCelular: celular,
          clienteNascimento: nascimento,
        }),
      });

      let json = await response.json();

      if (json === true) {
        toast.success("Cadastro realizado c/ sucesso");

        navigate("/Login");
      } else {
        toast.error(json);
      }
    } catch (error) {}
  }

  return (
    <Container>
      <Wrapper>
        <Title>CRIE A SUA CONTA AQUI</Title>
        <Form>
          <Input
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <Input
            placeholder="Nascimento"
            value={nascimento}
            onChange={(event) => setNascimento(event.target.value)}
          />
          <Input
            placeholder="Cpf"
            value={documento}
            onChange={(event) => setDocumento(event.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Celular"
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
          />

          <Input
            placeholder="Endereco"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
          <Input
            placeholder="Numero"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
          <Input
            placeholder="Bairro"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          />

          <Input
            placeholder="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
          <Input
            placeholder="Estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
          <Input
            placeholder="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          <Input
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <Input
            placeholder="Confirmacao Senha"
            value={confirmacaoSenha}
            onChange={(event) => setConfirmacaoSenha(event.target.value)}
          />
        </Form>

        <Agreement>-</Agreement>
        <Button
          onClick={handleSignIn}
          // onClick={notify}
        >
          CRIAR
        </Button>
        <br></br>
      </Wrapper>
    </Container>
  );
};

export default Register;
