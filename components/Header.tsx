import Link from "next/link";
import React, { useState, useTransition } from "react";
import styled from "styled-components";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);

  const Change = () => {
    setIsSearch(!isSearch);
  };

  return (
    <Wrap>
      <HeaderWrap>
        <CategoryWrap>
          <SubTitle>
            <Link
              href="/part1"
              style={{
                textDecoration: "none",
                color: "#334fb4",
              }}
            >
              <Shop>Shop</Shop>
            </Link>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#334fb4",
              }}
            >
              <Shop>Contact</Shop>
            </Link>
          </SubTitle>
        </CategoryWrap>
        <Title>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <DivWrap>
              <Smooch src="/Logo.png" />
            </DivWrap>
          </Link>
        </Title>
        <LoginWrap>
          {/* {isSearch ? (
            <div>
              <Login onClick={Change}>search</Login>
            </div>
          ) : (
            <Login onClick={Change}>search</Login>
          )} */}
          <Login onClick={Change}>search</Login>
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

const DivWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Smooch = styled.img`
  width: 55%;
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
  text-decoration: none;
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
