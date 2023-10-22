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
      <div>
        <DivWrap>
          <Div src="/Contact.jpeg" />
          <TextDiv>
            <div>
              &quot;Smooch&apos;s Sweet Journey&quot;는 브랜드 Xo Smooch의 제작
              모티브를 활용한 아트마케팅이다. Xo Smooch는 핸드메이드로 진행되는
              악세사리 판매 브랜드이며 자연의 여러 형태를 반영하여 제작되고
              있다. <br />
              현 컬렉션 모티브는 바다생물의 해파리와 불가사리 등이 있으며 형태가
              명확하지 않고 자유로운 모습을 통해 Smooch만의 독특한 디자인을
              확인할 수 있다. <br />
              이러한 자연의 형태를 활용하여 그리스 로마 신화의 에로스와 프시케의
              에피소드를 참고하여 아트북을 제작하였다. 아트북에 등장하는
              주인공들이 착용한 Smooch의 제품들을 확인 할 수 있다. <br />
              제작된 아트북 일러스트를 활용한 또다른 패브릭 악세사리 및 소품
              제작, 구매 사이트를 제작하여 브랜드의 제품 외 아트 마케팅을 활용한
              제품까지 관람 할 수 있다.
              <br /> 또한 곱창밴드 뜨개질 실과 바늘이 함께 담긴 패키지와
              곱창밴드를 제작 할 수 있는 영상을 QR을 통해 관람자가 직접 제작
              과정을 확인 할 수 있다.
            </div>
          </TextDiv>
        </DivWrap>
      </div>
      <Footer />
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 213px;
  object-fit: fill;
`;

const DivWrap = styled.div`
  width: 100vw;
  text-align: center;
`;

const Div = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const TextDiv = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  color: gray;
  white-space: pre-wrap;
`;
