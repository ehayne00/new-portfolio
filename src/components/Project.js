import React from 'react'
import styled from "styled-components"
import { Tween } from "react-gsap";

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
`;
const Project = () => {
    return(
        <>    <Tween to={{ y: "-20px", opacity: 0 }}>
        <Div1 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.1 }}>
        <Div2 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.2 }}>
        <Div3 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.3 }}>
        <Div4 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.4 }}>
        <Div5 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.5 }}>
        <Div6 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.6 }}>
        <Div7 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.7 }}>
        <Div8 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.8 }}>
        <Div9 />
      </Tween>
      <Tween to={{ y: "-20px", opacity: 0, delay: 0.9 }}>
        <Div10 />
      </Tween></>
    )
}

export default Project