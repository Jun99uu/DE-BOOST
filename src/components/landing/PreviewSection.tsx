import styled from "@emotion/styled";
import ResultBox from "../search/ResultBox";
import Summoner from "../search/ResultBox/Summoner";
import Section from "./Section";
import { dummyLanding } from "./dummy";
import { mq } from "@/styles/breakpoints";

const PreviewSection = () => {
  return (
    <Section
      title="세상에 없던 AI 대리 탐지 솔루션"
      subtitle="대리 플레이어 탐지 부터, 신고까지 한 번에!"
    >
      <LandingPreview>
        <Summoner {...dummyLanding} />
      </LandingPreview>
      <ResultBox />
    </Section>
  );
};

const LandingPreview = styled.div`
  width: 90%;
  min-width: 355px;

  ${mq[2]} {
    width: 70%;
  }

  ${mq[3]} {
    min-width: 39px;
    width: 40%;
    height: 115px;
  }

  ${mq[4]} {
    width: 35%;
    height: 120px;
  }
`;

export default PreviewSection;
