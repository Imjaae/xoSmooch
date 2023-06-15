import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrap>
      <Title>
        <Smooch>Xo Smooch</Smooch>
        <Login>search</Login>
        <Login>login</Login>
        <Login>cart</Login>
      </Title>
      <SubTitle>
        <Shop
          onClick={() => {
            setIsHover(!isHover);
          }}
        >
          Shop
        </Shop>
        <Shop>Contact</Shop>
      </SubTitle>

      <Category>
        {isHover ? (
          <>
            <Part>part1</Part>
            <Part>part2</Part>
            <Part>part3</Part>
            <Part>part4</Part>
            <Part>book</Part>
          </>
        ) : null}
      </Category>
    </Wrap>
  );
}

const Smooch = styled.div`
  margin-right: 45vw;
  font-size: 7rem;
  margin-left: 5vw;
`;

const Wrap = styled.div`
  width: 95vw;
  position: fixed;
  z-index: 1000;
`;

const Login = styled.div`
  color: #334fb4;
  font-size: 1rem;
  :hover {
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vw;
  align-items: flex-end;
  color: #334fb4;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9vw;
  padding: 1vw;
  margin-left: 6vw;
  color: #334fb4;
`;

const Shop = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  :hover {
    font-size: 2rem;
    font-weight: 600;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.4vw;
  padding: 0.5vw;
  margin-left: 6.5vw;
  :hover {
    color: tomato;
    transition: 0.4s;
    cursor: pointer;
  }
`;

const Part = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  color: #334fb4;
  :hover {
    font-size: 1.4rem;
    font-weight: 300;
    transition: 0.6s;
    cursor: pointer;
  }
`;
