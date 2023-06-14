import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

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
  font-weight: 400;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 10px;
  margin-left: 90px;
  transition: 0.2s;
  :hover {
    color: tomato;
  }
`;

const Part = styled.div`
  font-size: 20px;
  color: gray;
  font-weight: 200;
`;
