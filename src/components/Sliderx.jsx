import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { mobile } from "../responsive";

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
  height: 90%;

  flex: 1;
`;

const Image = styled.img`
  height: 60%;
  width: auto;
  max-width: 400px;
`;
const Sliderx = ({ item }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [itemsf, setItemsf] = useState("");

  useEffect(
    () => {
      // console.log(item);
      setItemsf(item);
    }, // eslint-disable-next-line
    []
  );

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  /*
  async function handleSignIn(rec) {
    // eslint-disable-next-line
    navigate("/Product" + "?" + rec);
    //  console.log(rec);
  }
*/
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {itemsf &&
          itemsf.map((item) => (
            <Slide key={item}>
              <ImgContainer>
                <Image src={item} />
              </ImgContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Sliderx;
