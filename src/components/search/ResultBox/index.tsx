import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import { dummy } from "./dummy";
import { FilteredTeam, getTeamAndWinStatus } from "@/libs/teamFilter";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import Analysis from "./Analysis";
import useMobile from "@/hooks/useMobile";
import { MatchData } from "../interface";

interface Props {
  match?: MatchData;
}

const ResultBox = ({ match = dummy }: Props) => {
  const user = useRecoilValue(userNameState);
  const [data, setData] = useState(match);
  const [info, setInfo] = useState<FilteredTeam | undefined>();
  const isMobile = useMobile();

  useEffect(() => {
    if (data) {
      const newInfo = getTeamAndWinStatus(data, user.name); //TODO user로 변경해야함
      setInfo(newInfo);
    }
  }, [data]);

  return (
    <Container>
      <Heading css={info?.win ? winStyle : loseStyle} />
      {isMobile ? (
        <></>
      ) : (
        <PlayerList
          {...info!}
          duration={data.gameInfo.gameDuration}
          dateBefore={data.gameInfo.gameStartTimestamp}
        />
      )}
      <Analysis info={data} />
    </Container>
  );
};

const winStyle = css`
  background-color: ${colors.primary};
`;

const loseStyle = css`
  background-color: ${colors.negative};
`;

const Container = styled.div`
  width: 95%;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  background-color: white;

  ${mq[3]} {
    min-width: 1120px;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const Heading = styled.div`
  width: 100%;
  height: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export default ResultBox;
