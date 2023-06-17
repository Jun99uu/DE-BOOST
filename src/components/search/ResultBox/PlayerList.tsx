import styled from "@emotion/styled";
import { GameData } from "../interface";
import { ComponentProps } from "react";
import { convertToMinutes, dateFormatter } from "@/libs/dateCalculator";
import { css } from "@emotion/react";
import { colors, typography } from "@/styles/tokens";
import Summoner from "./Summoner";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import Enemy from "./Enemy";
import { useNavigate } from "react-router-dom";

interface Props extends ComponentProps<"div"> {
  my: Array<GameData>;
  enemy: Array<GameData>;
  win: boolean;
  duration: number;
  dateBefore: number;
}

/**
 * detail 박스의 왼쪽
 * 플레이어 리스트 박스
 */
const PlayerList = ({
  my,
  enemy,
  win,
  duration,
  dateBefore,
  ...props
}: Props) => {
  const user = useRecoilValue(userNameState);
  const navigate = useNavigate();

  const onNavi = (name: string) => {
    navigate(`/search/${name}`);
  };

  /** 최상단 게임 정보 */
  const CaptionSection = () => {
    const obj = {
      win: win ? "승리" : "패배",
      duration: convertToMinutes(duration),
      dateBefore: dateFormatter(dateBefore),
    };

    return (
      <CaptionList>
        <span
          css={css`
            ${typography.content.md1.sb};
            color: ${win ? colors.primary : colors.negative};
          `}
        >
          {obj.win}
        </span>
        <span
          css={css`
            ${typography.content.md1.md};
            color: ${colors.gray10};
          `}
        >
          {obj.duration}
        </span>
        <span
          css={css`
            ${typography.content.md1.md};
            color: ${colors.gray10};
          `}
        >
          {obj.dateBefore}
        </span>
      </CaptionList>
    );
  };

  /** 나의 팀 리스트 */
  const MyList = () => {
    return (
      <>
        {my ? (
          my.map((data) => (
            <Summoner
              info={data}
              key={data.championId}
              onClick={() => onNavi(data.summonerName)}
              type={
                user.name === data.summonerName
                  ? win
                    ? "win"
                    : "lose"
                  : "basic"
              }
            />
          ))
        ) : (
          <></>
        )}
      </>
    );
  };

  /** 적 팀 리스트 */
  const EnemyList = () => {
    return (
      <EnemyWrapper>
        {enemy ? (
          enemy.map((data) => (
            <Enemy
              info={data}
              onClick={() => onNavi(data.summonerName)}
              key={data.championId}
            />
          ))
        ) : (
          <></>
        )}
      </EnemyWrapper>
    );
  };

  return (
    <Container {...props}>
      <CaptionSection />
      <MyList />
      <EnemyList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 25px;
  gap: 20px;
  position: relative;
`;

const CaptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

const EnemyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export default PlayerList;
