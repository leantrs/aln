import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState /*, useEffect*/ } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 1 })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;

  background-color: #fff7f7;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 50%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 90%;

  flex: 1;
`;

const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 400px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.lista.listax);

  const data = Array.from(todos);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    navigate("/Product" + "?" + rec);
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data &&
          data.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image
                  src={item.img}
                  onClick={(event) => handleSignIn(item.id)}
                />
              </ImgContainer>

              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.descr}</Desc>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
