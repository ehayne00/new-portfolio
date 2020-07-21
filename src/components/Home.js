import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import flower from "../assets/flowerYellow.svg";

const Div1 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0),
    rgb(39, 229, 116, 0.1)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div2 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.1),
    rgb(39, 229, 116, 0.2)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div3 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.2),
    rgb(39, 229, 116, 0.3)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div4 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.3),
    rgb(39, 229, 116, 0.4)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div5 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.4),
    rgb(39, 229, 116, 0.5)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div6 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.5),
    rgb(39, 229, 116, 0.6)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div7 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.6),
    rgb(39, 229, 116, 0.7)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div8 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.7),
    rgb(39, 229, 116, 0.8)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div9 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.8),
    rgb(39, 229, 116, 0.9)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const Div10 = styled.div`
  width: 100%;
  height: 63px;
  background-image: linear-gradient(
    rgb(39, 229, 116, 0.9),
    rgb(39, 229, 116, 1)
  );
  @media (max-height: 823px) {
    height: 83px;
  }
  @media (max-height: 736px) {
    height: 74px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  z-index: 101;
  height: 80px;
  width: 80px;
  margin-top: 320px;
  margin-left: -35px;
`;

const Hi = styled.p`
  position: absolute;
  color: white;
  margin-left: 20%;
  margin-top: 60px;
  font-size: 50px;
  font-family: "Abril Fatface", cursive;
  z-index: 102;
`;

const Im = styled.p`
  position: absolute;
  color: white;
  font-size: 40px;
  font-family: "Abril Fatface", cursive;
  margin-top: 140px;
  margin-left: 30%;
  z-index: 102;
`;

const Emily = styled.p`
  position: absolute;
  color: rgb(240, 128, 128);
  text-shadow: 2px 2px 2px black;
  font-size: 40px;
  font-family: "Abril Fatface", cursive;
  margin-top: 195px;
  margin-left: 34%;
  z-index: 102;
  @media (max-width: 414px) {
    margin-left: 3%;
    font-size: 33px;
  }
`;

const Violet = styled.p`
  position: absolute;
  color: rgb(220, 20, 60);
  text-shadow: 2px 2px 2px black;
  font-size: 40px;
  font-family: "Abril Fatface", cursive;
  margin-top: 195px;
  margin-left: 46%;
  z-index: 102;
  @media (max-width: 414px) {
    margin-left: 32%;
    font-size: 33px;
  }
`;

const Haynes = styled.p`
  position: absolute;
  color: rgb(255, 0, 0);
  text-shadow: 2px 2px 2px black;
  font-size: 40px;
  font-family: "Abril Fatface", cursive;
  margin-top: 195px;
  margin-left: 59%;
  z-index: 102;
  @media (max-width: 414px) {
    margin-left: 64%;
    font-size: 33px;
  }
`;

const Software = styled.p`
  width: 100%;
  position: absolute;
  color: rgb(75, 0, 130);
  font-size: 25px;
  font-family: "Abril Fatface", cursive;
  margin-top: 470px;
  margin-left: 2%;
  z-index: 102;
  @media (max-width: 414px) {
    margin-left: 5%;
    width: 90%;
  }
`;

// font-family: 'Abril Fatface', cursive;
// font-family: 'Lobster', cursive;

const Home = () => {
  return (
    <>
      <Tween
        from={{
          y: "-300px",
          x: "-200px",
          rotation: 360,
          opacity: 0,
          delay: 1,
          duration: 2,
        }}
      >
        <StyledImage src={flower} alt="" />
      </Tween>
      <Tween from={{ opacity: 0, delay: 2.2 }}>
        <Hi>Hi.</Hi>
      </Tween>

      <Tween from={{ opacity: 0, delay: 3 }}>
        <Im>I'm</Im>
      </Tween>
      <Tween from={{ opacity: 0, delay: 3.2 }}>
        <Emily>Emily</Emily>
      </Tween>
      <Tween from={{ opacity: 0, delay: 3.3 }}>
        <Violet>Violet</Violet>
      </Tween>
      <Tween from={{ opacity: 0, delay: 3.4 }}>
        <Haynes>Haynes</Haynes>
      </Tween>
      <Tween from={{ opacity: 0, delay: 4.2 }}>
        <Software>Full Stack Software Engineer / Web Developer</Software>
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