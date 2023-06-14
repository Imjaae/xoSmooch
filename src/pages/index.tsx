import Header from "components/Header";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Wrap>
        <Header />
      </Wrap>
      <Div>메인페이지</Div>
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 250px;
`;

const Div = styled.div`
  color: red;
`;
