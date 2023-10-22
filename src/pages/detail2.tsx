import Footer from "components/Footer";
import Header from "components/Header";
import React, { useState } from "react";
import styled from "styled-components";

export default function Part1() {
  return (
    <div>
      <Header />
      <DetailWrap>
        <Product>
          <ImgWrap>
            <ProductImg src="/product/1.2.webp" />
          </ImgWrap>
          <DetailInfo>
            <Smooch>xoSmooch</Smooch>
            <Name>Som</Name>
            <Price>￦ 32,000 KRW</Price>
            <Plus>Tax included. Shipping calculated at checkout</Plus>
            <Category>Size</Category>
            <Box>
              <TextInfo>Queen - Available</TextInfo>
              <Arrow src="/arrow.png" />
            </Box>
            <Category>Main Color</Category>
            <Box>
              <TextInfo>Baby Blue - Available</TextInfo>
              <Arrow src="/arrow.png" />
            </Box>
            <Category>Tip Color</Category>
            <Box>
              <TextInfo>Baby Blue - Available</TextInfo>
              {/* <Arrow src="/arrow.png" /> */}
            </Box>
            <Category>Quantity</Category>
            <Box2>
              <Quantity>
                <div>-</div>
                <div
                  style={{
                    fontWeight: "300",
                  }}
                >
                  1
                </div>
                <div>+</div>
              </Quantity>
            </Box2>
            <Buy>
              <BuyText>Buy Now</BuyText>
            </Buy>
          </DetailInfo>
        </Product>
        <DetailImg>
          <Imges>
            <Details src="/detail1.webp" />
            <Details src="/detail2.webp" />
            <Details src="/detail3.webp" />
          </Imges>
        </DetailImg>
      </DetailWrap>
      <Footer />
    </div>
  );
}

const DetailWrap = styled.div`
  padding: 100px 0 150px 0px;
  font-family: "Jura", sans-serif;
  font-style: normal;
`;

const Product = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;
const ImgWrap = styled.div`
  width: 70%;
  text-align: center;
  padding: 80px 10px 0px 0px;
`;

const ProductImg = styled.img`
  width: 61%;
  object-fit: contain;
  :hover {
    scale: 1.1;
    transition: 0.5s;
  }
`;

const DetailInfo = styled.div`
  width: 50%;
  /* border: solid 1px blue; */
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const Smooch = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #023aff;
`;

const Name = styled.div`
  font-size: 72px;
  font-weight: 400;
  color: #023aff;
  margin: -8px 0px 0px -5px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #023aff;
`;

const Plus = styled.div`
  font-size: 13px;
  font-weight: 100;
  color: #023aff;
  margin: 5px 0px 40px 0px;
`;

const Category = styled.div`
  font-size: 25px;
  color: #023aff;
  font-weight: 300;
  margin-bottom: 9px;
`;

const Box = styled.div`
  width: 70%;
  height: 64px;
  border: solid 0.2px #023aff;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const TextInfo = styled.div`
  text-align: left;
  padding-left: 6%;
  color: #023aff;
  font-size: 18px;
  font-weight: 300;
  line-height: 66px;
  width: 80%;
  :hover {
    font-size: 20px;
    font-weight: 400;
    transition: 0.5s;
  }
`;

const Arrow = styled.img`
  width: 19px;
  height: 10px;
  align-items: flex-start;
`;

const Box2 = styled.div`
  width: 35%;
  height: 64px;
  border: solid 0.2px #023aff;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Quantity = styled.div`
  text-align: left;
  padding-left: 6%;
  color: #023aff;
  font-size: 20px;
  font-weight: 300;
  line-height: 66px;
  width: 100%;
  text-align: center;
  display: flex;
  place-content: space-around;
  :hover {
    font-size: 23px;
    font-weight: 400;
    transition: 0.5s;
  }
`;

const Buy = styled.div`
  width: 90%;
  height: 64px;
  border: solid 1px #6666;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 300;
  color: gray;
  :hover {
    background-color: #899eea9c;
    border: solid 0px;
    color: white;
    font-weight: 500;
    font-size: 28px;
    transition: 0.5s;
  }
`;

const BuyText = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const DetailImg = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  margin-top: 100px;
  border-top: solid 1px #6666;
`;

const Details = styled.img`
  margin-top: 150px;
  width: 30%;
  object-fit: contain;
  padding: 1%;
  :hover {
    scale: 1.05;
    transition: 0.5s;
  }
`;

const Imges = styled.div`
  width: 100%;
  text-align: center;
`;
