import { typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { GameInfo, TeamParticipant } from "../interface";
import { getPortrait } from "@/libs/getRes";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  data: GameInfo;
}

interface OneProps {
  one: TeamParticipant;
}

/**  팀원 섹션  */
const TeamSection = ({ data, ...props }: Props) => {
  /** 한 명의 데이터 */
  const One = ({ one }: OneProps) => {
    //TODO 초상화 챔피언 명으로 수정해야됨. 현재 검색결과는 챔피언 아이디가 오고있음;
    return (
      <OneWrapper>
        <Portrait src={getPortrait("Zoe")} />
        <span>{one.summonerName}</span>
      </OneWrapper>
    );
  };

  return (
    <Container {...props}>
      <TeamWrapper>
        {data.participantInfos.team1.map((one) => (
          <One one={one} key={one.summonerName} />
        ))}
      </TeamWrapper>
      <TeamWrapper>
        {data.participantInfos.team2.map((one) => (
          <One one={one} key={one.summonerName} />
        ))}
      </TeamWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  gap: 0.5rem;
`;

const OneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  ${typography.caption.md1.reg};
  color: #757575;
`;

const Portrait = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0.1rem;
  object-fit: cover;
  object-position: center;
`;

export default TeamSection;
