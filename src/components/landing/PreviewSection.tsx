import ResultBox from "../search/ResultBox";
import Summoner from "../search/ResultBox/Summoner";
import Section from "./Section";
import { dummyLanding } from "./dummy";

const PreviewSection = () => {
  return (
    <Section
      title="세상에 없던 AI 대리 탐지 솔루션"
      subtitle="대리 플레이어 탐지 부터, 신고까지 한 번에!"
    >
      <Summoner {...dummyLanding} />
      <ResultBox />
    </Section>
  );
};

export default PreviewSection;
