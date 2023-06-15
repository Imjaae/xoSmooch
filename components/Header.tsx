import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrap>
      <HeaderWrap>
        <CategoryWrap>
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
          <Smooch>Xo Smooch</Smooch>
          <Login>search</Login>
          <Login>login</Login>
          <Login>cart</Login>
        </Title>
      </HeaderWrap>
    </Wrap>
  );
}

const HeaderWrap = styled.div`
  width: 100vw;
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
  margin: 0 22vw 0 4vw;
  font-size: 6rem;
  font-family: "Jura";
  font-style: normal;
  font-weight: 400;
`;

const Wrap = styled.div`
  width: 95vw;
  /* position: fixed; */
  z-index: 1000;
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
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vw 4.8vw 2vw 2vw;
  align-items: flex-end;
  color: #334fb4;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  padding-left: 3vw;
  margin-top: -5px;
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
    font-size: 1.86rem;
    font-weight: 600;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.4vw;
  padding: 20px 0px 0px 3vw;
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
  }
`;
