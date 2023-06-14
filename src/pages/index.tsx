import Header from "components/Header";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Wrap>
        <Header />
      </Wrap>
      <Div>Main Page</Div>
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 400px;
`;

const Div = styled.div`
  color: tomato;
  font-size: 140px;
  font-weight: 100;
`;
