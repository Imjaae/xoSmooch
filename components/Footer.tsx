import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrap>
      <FooterTitle>2023, XoSmooch by Dayoung</FooterTitle>
      <FooterSecond>Republic of Korea</FooterSecond>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 95vw;
  height: 200px;
  font-family: "Jura";
  font-style: normal;
  font-weight: 600;
  z-index: 1000;
  display: flex;
  flex-direction: row;
`;

const FooterTitle = styled.div`
  font-size: 22px;
  font-weight: 100;
  padding: 120px 0px 0px 50px;
  vertical-align: bottom;
  height: 5%;
  color: gray;
  width: 70%;
`;

const FooterSecond = styled.div`
  width: 30%;
  font-size: 22px;
  font-weight: 100;
  padding: 120px 0px 0px 50px;
  text-align: end;
  height: 5%;
  color: gray;
`;
