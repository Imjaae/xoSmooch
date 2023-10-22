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
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail"
            >
              <Imaged src="/product/1.1.webp" />

              <ProductInfo>Yang</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail2"
            >
              <Imaged src="/product/1.2.webp" />
              <ProductInfo>Som</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail3"
            >
              <Imaged src="/product/1.3.webp" />
              <ProductInfo>Maum</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail4"
            >
              <Imaged src="/product/1.4.webp" />
              <ProductInfo>Bangwool</ProductInfo>
              <Prise>KRW 34,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail5"
            >
              <Imaged src="/product/2.1.webp" />
              <ProductInfo>Mooch</ProductInfo>
              <Prise>KRW 31,000</Prise>
            </Link>
          </Products>
        </Div>
        <Div>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail6"
            >
              <Imaged src="/product/2.2.webp" />
              <ProductInfo>Bong</ProductInfo>
              <Prise>KRW 36,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail7"
            >
              <Imaged src="/product/2.3.webp" />
              <ProductInfo>Jellyfish</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/cloud"
            >
              <Imaged src="/product/2.4.webp" />
              <ProductInfo>Cloud</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail8"
            >
              <Imaged src="/product/4.4.webp" />
              <ProductInfo>Sun</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail9"
            >
              <Imaged src="/product/3.2.webp" />
              <ProductInfo>Umi</ProductInfo>
              <Prise>KRW 34,000</Prise>
            </Link>
          </Products>
        </Div>
        <Div>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail10"
            >
              <Imaged src="/product/3.3.webp" />
              <ProductInfo>Bubble</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail11"
            >
              <Imaged src="/product/3.4.webp" />
              <ProductInfo>Blue</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail12"
            >
              <Imaged src="/product/1.2.webp" />
              <ProductInfo>Pool</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail13"
            >
              <Imaged src="/product/4.2.webp" />
              <ProductInfo>Mushroom</ProductInfo>
              <Prise>KRW 35,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail14"
            >
              <Imaged src="/product/4.3.webp" />
              <ProductInfo>Dalmatian</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
        </Div>
        <Div>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/detail15"
            >
              <Imaged src="/product/4.4.webp" />
              <ProductInfo>Sunset</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/Space"
            >
              <Imaged src="/product/1.1.webp" />
              <ProductInfo>Space</ProductInfo>
              <Prise>KRW 32,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/Moon"
            >
              <Imaged src="/product/1.2.webp" />
              <ProductInfo>Moon</ProductInfo>
              <Prise>KRW 30,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/Reef"
            >
              <Imaged src="/product/1.3.webp" />
              <ProductInfo>Reef</ProductInfo>
              <Prise>KRW 34,000</Prise>
            </Link>
          </Products>
          <Products>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/Egg"
            >
              <Imaged src="/product/1.4.webp" />
              <ProductInfo>Egg</ProductInfo>
              <Prise>KRW 34,000</Prise>
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
    cursor: pointer;
  }
`;

const Prise = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #334fb4;
`;
