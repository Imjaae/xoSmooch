import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function Part3() {
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
            <Imaged src="/product/3.1.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Yang</ProductInfo>
              <Prise>KRW 63,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.2.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Som</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.3.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Maum</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.4.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Bangwool</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
        </Div>
        <Div>
          <Products>
            <Imaged src="/product/3.4.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Bangwool</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.3.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Maum</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.2.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Som</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Imaged src="/product/3.1.webp" />
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <ProductInfo>Yang</ProductInfo>
              <Prise>KRW 63,000</Prise>
            </Link>
          </Products>
        </Div>
      </div>
      <Footer />
    </div>
  );
}

const Div = styled.div`
  display: flex;
  /* overflow: scroll;s */
  margin: 0 auto;
  width: 90vw;
  height: 40vh;
  margin-bottom: 130px;
  font-family: "Jura", sans-serif;
  font-style: normal;
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
  width: 80%;
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
