import styled from "@emotion/styled";
import PortraitSection from "../ResultBox/Summoner/PortraitSection";
import { GameInfo } from "../interface";
import SpellSection from "../ResultBox/Summoner/SpellSection";
import InfoSection from "../ResultBox/Summoner/InfoSection";
import ItemSection from "../ResultBox/Summoner/ItemSection";
import WardSection from "../ResultBox/Summoner/WardSection";
import { mq } from "@/styles/breakpoints";

interface Props {
  match: GameInfo;
}

/** 프리뷰 내부 서머너 컴포넌트 */
const Summoner = ({ match }: Props) => {
  /** 초상화 킬뎃 평점 날짜 래퍼 */
  const Top = () => {
    return (
      <TopWrapper>
        <PortraitSection info={match.info.gameData} />
        <SpellSection info={match.info.gameData} />
        <InfoSection
          info={match.info.gameData}
          endTime={match.info.gameEndTimestamp}
        />
      </TopWrapper>
    );
  };

  /** 아이템, 와드 래퍼 */
  const Bottom = () => {
    return (
      <BottomWrapper>
        <ItemSection info={match.info.gameData} />
        <WardSection info={match.info.gameData} />
      </BottomWrapper>
    );
  };

  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;

  ${mq[3]} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
`;

const TopWrapper = styled.div`
  min-width: 20rem;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  ${mq[3]} {
    height: 100%;
  }
`;

const BottomWrapper = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  ${mq[3]} {
    height: 100%;
  }
`;

export default Summoner;
