import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import flower from "../assets/flowerYellow.svg";

const Div1 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0),
    rgb(39, 229, 116, 0.1)
  );
`;

const Div2 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.1),
    rgb(39, 229, 116, 0.2)
  );
`;

const Div3 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.2),
    rgb(39, 229, 116, 0.3)
  );
`;

const Div4 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.3),
    rgb(39, 229, 116, 0.4)
  );
`;

const Div5 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.4),
    rgb(39, 229, 116, 0.5)
  );
`;

const Div6 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.5),
    rgb(39, 229, 116, 0.6)
  );
`;

const Div7 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.6),
    rgb(39, 229, 116, 0.7)
  );
`;

const Div8 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.7),
    rgb(39, 229, 116, 0.8)
  );
`;

const Div9 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.8),
    rgb(39, 229, 116, 0.9)
  );
`;

const Div10 = styled.div`
  width: 100%;
  height: 62px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.9),
    rgb(39, 229, 116, 1)
  );
`;

const StyledImage = styled.img`
  position: absolute;
  margin-top: 0;
  z-index: 101;
  height: 80px;
  width: 80px;
  margin-top: 300px;

`;

const Hi = styled.p`
position: absolute;
color: white;
margin-left: 20%;
margin-top: 60px;
font-size: 50px;
font-family: 'Abril Fatface', cursive;
z-index: 102;`

const Text1 = styled.p`
position: absolute;
color: black;
font-size: 40px;
font-family: 'Abril Fatface', cursive;
margin-top: 140px;
margin-left: 30%;
`

const Text2 = styled.p`
position: absolute;
color: black;
font-size: 40px;
font-family: 'Abril Fatface', cursive;
margin-top: 140px;
margin-left: 36%;
z-index: 102;
`

const Text3 = styled.p`
position: absolute;
color: black;
font-size: 40px;
font-family: 'Abril Fatface', cursive;
margin-top: 140px;
margin-left: 45%;
z-index: 102;
`

const Text4 = styled.p`
position: absolute;
color: black;
font-size: 40px;
font-family: 'Abril Fatface', cursive;
margin-top: 140px;
margin-left: 55%;
z-index: 102;
`

// font-family: 'Abril Fatface', cursive;
// font-family: 'Lobster', cursive;

const Home = () => {
  return (
    <>
      <Tween from={{ y: "-300px", x: "-200px", rotation: 360, opacity: 0, delay: 1, duration: 2 }}>
        <StyledImage src={flower} alt="" />
      </Tween>
      <Tween from={{ opacity: 0, delay: 2 }}>
          <Hi>Hi.</Hi>
      </Tween>
      <Tween from={{ opacity: 0, delay: 2.4 }}>
          <Text1>I'm</Text1>
      </Tween>
      <Tween from={{ opacity: 0, delay: 2.6 }}>
          <Text2>Emily</Text2>
      </Tween>
      <Tween from={{ opacity: 0, delay: 2.7 }}>
          <Text3>Violet</Text3>
      </Tween>
      <Tween from={{ opacity: 0, delay: 2.8 }}>
          <Text4>Haynes</Text4>
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0 }}>
        <Div1 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.1 }}>
        <Div2 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.2 }}>
        <Div3 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.3 }}>
        <Div4 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.4 }}>
        <Div5 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.5 }}>
        <Div6 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.6 }}>
        <Div7 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.7 }}>
        <Div8 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.8 }}>
        <Div9 />
      </Tween>
      <Tween from={{ y: "-20px", opacity: 0, delay: 0.9 }}>
        <Div10 />
      </Tween>
    </>
  );
};

export default Home;
