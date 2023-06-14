import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrap>
      <Title>
        <div
          style={{
            marginRight: "1000px",
            fontSize: "120px",
          }}
        >
          Xo Smooch
        </div>
        <div>search</div>
        <div>login</div>
        <div>cart</div>
      </Title>
      <SubTitle>
        <Shop>Shop</Shop>
        <Shop>Contact</Shop>
      </SubTitle>
      <Category></Category>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 95vw;
  position: fixed;
  z-index: 1000;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: flex-end;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  padding: 20px;
  margin-left: 80px;
`;

const Shop = styled.div`
  font-size: 40px;
`;

const Category = styled.div``;
