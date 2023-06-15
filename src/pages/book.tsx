import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function Part1() {
  return (
    <div>
      <Header />
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          boxShadow: "inset 0px 29px 40px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Div>
          <Products>
            <Imaged src="/book/1.webp" />
          </Products>

          <Products>
            <Imaged src="/book/2.webp" />
          </Products>
          <Products>
            <Imaged src="/book/3.webp" />
          </Products>
          <Products>
            <Imaged src="/book/4.webp" />
          </Products>
          <Products>
            <Imaged src="/book/5.webp" />
          </Products>
        </Div>
      </div>
      <Footer />
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  :hover {
    scale: 1.1;
    transition: 0.4s;
  }
`;

const Imaged = styled.img`
  width: 50%;
  height: 80%;
  object-fit: contain;
  margin: auto;
  vertical-align: middle;
  align-items: center;
  padding: 30px;
  margin-bottom: 10px;
  /* border: 0.1px solid #334fb431; */
`;

const ProductInfo = styled.div`
  color: #334fb4;
  font-size: 30px;
  margin-bottom: 5px;
  :hover {
    font-size: 37px;
    font-weight: 400;
    transition: 0.6s;
    color: tomato;
  }
`;

const Prise = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #334fb4;
`;
