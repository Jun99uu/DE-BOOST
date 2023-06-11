import styled from "@emotion/styled";
import { GameData, MatchData } from "../../interface";
import { getPlayerBySummonerName } from "@/libs/teamFilter";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { getIllust } from "@/libs/getRes";
import Profile from "./Profile";
import Percentage from "./Percentage";
import { mq } from "@/styles/breakpoints";
import Report from "./Report";

interface Props {
  info: MatchData;
}

const Analysis = ({ info }: Props) => {
  const user = useRecoilValue(userNameState);
  const [myInfo, setMyInfo] = useState<GameData>(info.team1[0]);

  useEffect(() => {
    setMyInfo(getPlayerBySummonerName(info, user.name)!);
  }, []);

  return (
    <Container>
      <BackgroundWrapper>
        <Background src={getIllust(myInfo?.championName!)} />
        <BackgroundGradient />
      </BackgroundWrapper>
      <Profile data={myInfo} />
      <Percentage />
      <Report data={info.manufactureInfo} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 30px;
  padding: 5rem 0rem;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #00ff0000, #ffffffcf, white);
  position: absolute;
  top: 0px;
  left: 0px;

  ${mq[3]} {
    background: linear-gradient(to bottom, #00ff0000, white);
  }
`;

export default Analysis;
