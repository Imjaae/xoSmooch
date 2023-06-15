import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Wrap>
        <Header />
      </Wrap>
      <Div src="/배경.jpg" />
      <Footer />
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 220px;
`;

const Div = styled.img`
  width: 100vw;
  margin: -8px;
`;
