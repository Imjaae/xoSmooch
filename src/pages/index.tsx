import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Wrap>
        <Header />
      </Wrap>
      <div>
        <DivWrap>
          <Div src="/MainPage.jpg" />
        </DivWrap>
      </div>

      {/* <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          // url={"https://youtu.be/sIjwScyUqlA?si=0XIL9coFrUH1YmIP"} // 플레이어 url
          src="/test.avi"
          width="100%" // 플레이어 크기 (가로)
          height="700px" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          autoplay
          muted={true} // 자동 재생 on
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={false} // pip 모드 설정 여부
        />
      </div> */}

      {/* <video autoPlay controls width="100%" height="100%">
        <source
          src={"http://www.youtube.com/embed/HLnTVgdP_g0"}
          type="video/avi"
        />
      </video> */}
      {/* <Div src="/배경.jpg" /> */}
      <Footer />
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 213px;
  object-fit: fill;
  margin-bottom: 74px;
`;

const DivWrap = styled.div`
  width: 100vw;
  text-align: center;
`;

const Div = styled.img`
  width: 80%;
  margin: 0 auto;
`;
