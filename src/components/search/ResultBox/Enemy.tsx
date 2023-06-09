import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { GameData } from "../interface";
import { getPortrait } from "@/libs/getRes";
import { mq } from "@/styles/breakpoints";
import { css } from "@emotion/react";

interface Props {
  info: GameData;
}

const Enemy = ({ info }: Props) => {
  return (
    <Box css={info.win ? win : lose}>
      <PortraitWrapper>
        <Portrait
          src={getPortrait(info.championName)}
          alt={info.championName}
        />
        <LevelWrapper>{info.champLevel}</LevelWrapper>
      </PortraitWrapper>
    </Box>
  );
};

const PortraitWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const win = css`
  background-color: ${colors.primary10};
  border: 0.5px solid ${colors.primary};
`;

const lose = css`
  background-color: ${colors.negative10};
  border: 0.5px solid ${colors.negative};
`;

const Box = styled.div`
  width: 20%;
  aspect-ratio: 1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const LevelWrapper = styled.span`
  ${typography.caption.lg.sb};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 500px;
  background-color: ${colors.darkest};
  color: white;
  position: absolute;
  bottom: -5px;
  right: -5px;

  ${mq[3]} {
    width: 25px;
    height: 25px;
    bottom: -5px;
    right: -5px;
  }
`;

export default Enemy;
