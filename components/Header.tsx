import Link from "next/link";
import React, { useState, useTransition } from "react";
import styled from "styled-components";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  const Change = () => {
    setIsHover(!isHover);
  };

  return (
    <Wrap>
      <HeaderWrap>
        <CategoryWrap>
          <SubTitle>
            <Shop onClick={Change}>Shop</Shop>
            <Shop>Contact</Shop>
          </SubTitle>
          <Category>
            {isHover ? (
              <>
                <Link
                  href="/part1"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Part>part1</Part>
                </Link>
                <Link
                  href="/part2"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Part>part2</Part>
                </Link>
                <Link
                  href="/part3"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Part>part3</Part>
                </Link>
                <Link
                  href="/part4"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Part>part4</Part>
                </Link>
                <Link
                  href="/book"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Part>book</Part>
                </Link>
              </>
            ) : null}
          </Category>
        </CategoryWrap>
        <Title>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Smooch>Xo Smooch</Smooch>
          </Link>
        </Title>
        <LoginWrap>
          <Login>search</Login>
          <Login>login</Login>
          <Login>cart</Login>
        </LoginWrap>
      </HeaderWrap>
    </Wrap>
  );
}

const HeaderWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
`;

const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 200px;
`;

const Smooch = styled.div`
  font-size: 6vw;
  font-family: "Jura";
  font-style: normal;
  font-weight: 400;
  color: #334fb4;
`;

const Wrap = styled.div`
  margin-top: 60px;
  z-index: 1000;
`;

const LoginWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  justify-content: center;
  margin-top: 30px;
`;

const Login = styled.div`
  color: #334fb4;
  font-size: 1rem;
  font-family: "Jura";
  font-style: normal;
  padding-bottom: 30px;
  :hover {
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 40%;
  align-items: flex-end;
  color: #334fb4;
  text-align: center;
  :hover {
    cursor: pointer;
    scale: 1.06;
    transition: 0.9s;
  }
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4vw;
  padding-left: 5vw;
  margin-top: -21px;
  color: #334fb4;
  height: 70%;
  align-items: flex-end;
`;

const Shop = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Jura";
  font-style: normal;
  :hover {
    font-size: 1.9rem;
    font-weight: 600;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.4vw;
  padding: 30px 0px 0px 4.9vw;
  :hover {
    color: tomato;
    transition: 0.4s;
    cursor: pointer;
  }
`;

const Part = styled.div`
  font-size: 1.2rem;
  font-family: "Jura";
  font-style: normal;
  font-weight: 200;
  color: #334fb4;
  :hover {
    font-size: 1.4rem;
    font-weight: 300;
    transition: 0.6s;
    cursor: pointer;
    color: tomato;
  }
`;
