import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import { FilteredTeam, getTeamAndWinStatus } from "@/libs/teamFilter";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import Analysis from "./Analysis";
import useMobile from "@/hooks/useMobile";
import { MatchData } from "../interface";
import { getInfoDetails } from "@/libs/api/apis";
import { CircleSquare } from "@/components/common/Loading";

interface Props {
  gameId: string;
  moveToAnalysis: () => void;
}

const ResultBox = ({ gameId, moveToAnalysis }: Props) => {
  const user = useRecoilValue(userNameState);
  const [data, setData] = useState<MatchData | null>();
  const [info, setInfo] = useState<FilteredTeam | undefined>();
  const [loading, setLoading] = useState(true);
  const isMobile = useMobile();

  const gettingMatchInfo = () => {
    getInfoDetails(user.name, gameId)
      .then((res) => {
        setData(res.data);
        convertStatus(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const convertStatus = (data: MatchData) => {
    const newInfo = getTeamAndWinStatus(data, user.name);
    setInfo(newInfo);
  };

  useEffect(() => {
    gettingMatchInfo();
  }, []);

  const LoadingSection = () => {
    return loading ? (
      <LoadingContainer>
        <CircleSquare />
      </LoadingContainer>
    ) : (
      <></>
    );
  };

  return (
    <Container>
      <Heading css={info?.win ? winStyle : loseStyle} />
      {!isMobile && data && !loading ? (
        <>
          <PlayerList
            {...info!}
            duration={data.gameInfo.gameDuration}
            dateBefore={data.gameInfo.gameStartTimestamp}
          />
        </>
      ) : (
        <></>
      )}
      {data ? <Analysis info={data} moveToAnalysis={moveToAnalysis} /> : <></>}
      <LoadingSection />
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

const LoadingContainer = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ResultBox;
