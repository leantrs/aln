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
  align-items: left;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 0;
`;

const Image = styled.img`
  height: 70%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.lista.listax);

  const data = Array.from(todos);

  // console.log(data);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    navigate("/Product" + "?" + rec);
    //  console.log(rec);
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
                <Image src={item.img} />
              </ImgContainer>

              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.descr}</Desc>

                <Button
                  value={item.idb}
                  onClick={(event) => handleSignIn(item.id)}
                  // onClick={(event) => handleSignIn(event.target.value)}
                >
                  DETALHES
                </Button>
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
