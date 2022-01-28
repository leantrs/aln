import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Footer = () => {
  async function handleSignIn() {
    // eslint-disable-next-line
    window.location.href = "https://www.instagram.com/alineleandromodas/";
  }
  return (
    <Container>
      <Center>
        <Desc>
          <img
            src="//assets.pagseguro.com.br/ps-integration-assets/banners/divulgacao/125x125_10X_pagseguro.gif"
            alt="Banner PagSeguro"
            title="Parcele suas compras em até 18x"
          ></img>

          <img
            src="//assets.pagseguro.com.br/ps-integration-assets/banners/seguranca/seguranca_125x125.gif"
            alt="Banner PagSeguro"
            title="Compre com PagSeguro e fique sossegado"
          ></img>
        </Desc>
        <Logo>Aline Leandro Modas</Logo>
        <Desc>Qualidade, ética, comprometimento, respeito e simpatia.</Desc>
        <Desc>
          {" "}
          <br></br>© 2021 Aline Leandro Modas. Todos os direitos reservados.
          ALINE LEANDRO ME, com sede na Rua João Francisco Barbosa 170, Vila
          Nova, Porto Alegre/RS, CEP 91740-530, Fone 41 98538-9509 , inscrita no
          CNPJ sob o n° 71.673.990/0001-77, sociedade executa atividades de Drop
          Shipping em geral e se dedica à pesquisa e desenvolvimento de
          produtos.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram onClick={handleSignIn}></Instagram>
          </SocialIcon>
        </SocialContainer>
      </Center>
    </Container>
  );
};

export default Footer;
