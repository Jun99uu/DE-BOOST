import styled from "@emotion/styled";
import { GameInfo } from "../interface";
import { useEffect, useState } from "react";
import { dateFormatter, getTimeDifference } from "@/libs/dateCalculator";
import { css } from "@emotion/react";
import { colors, typography } from "@/styles/tokens";
import { mq } from "@/styles/breakpoints";

type InfoProps = typeof defaultInfos;

const defaultInfos = {
  win: "",
  winStyle: css``,
  game: "랭크게임", //mvp에서는 랭크게임으로 고정
  date: "",
  far: "",
};

interface Props {
  match: GameInfo;
}

/** 게임 기본 정보 섹션 */
const BasicInfoSection = ({ match }: Props) => {
  const [contents, setContents] = useState<InfoProps>(defaultInfos);

  const settingCotents = () => {
    const newContents: InfoProps = {
      win: match.info.gameData.win ? "승리" : "패배",
      winStyle: match.info.gameData.win ? winStyle : loseStyle,
      game: "랭크게임",
      date: getTimeDifference(
        match.info.gameEndTimestamp,
        match.info.gameStartTimestamp
      ),
      far: dateFormatter(match.info.gameEndTimestamp),
    };
    setContents(newContents);
  };

  useEffect(() => {
    settingCotents();
  }, []);

  return (
    <Wrapper>
      <Title css={contents.winStyle}>{contents.win}</Title>
      <Subtitle>{contents.game}</Subtitle>
      <Subtitle>{contents.date}</Subtitle>
      <Content>{contents.far}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const winStyle = css`
  color: ${colors.primary};
`;

const loseStyle = css`
  color: ${colors.negative};
`;

const Title = styled.span`
  ${typography.caption.lg.sb};
  text-align: center;

  ${mq[3]} {
    ${typography.content.md2.sb};
  }
`;

const Subtitle = styled.span`
  ${typography.caption.md1.reg};
  text-align: center;

  ${mq[3]} {
    ${typography.caption.lg.reg};
  }
`;

const Content = styled.span`
  ${typography.caption.md1.reg};
  color: ${colors.gray};
  text-align: center;

  ${mq[3]} {
    ${typography.caption.lg.reg};
  }
`;

export default BasicInfoSection;
