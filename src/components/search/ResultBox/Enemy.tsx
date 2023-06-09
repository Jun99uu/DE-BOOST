import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { GameData } from "../interface";
import { getPortrait } from "@/libs/getRes";
import { mq } from "@/styles/breakpoints";

interface Props {
  info: GameData;
}

const Enemy = ({ info }: Props) => {
  return (
    <Box>
      <PortraitWrapper>
        <Portrait
          src={getPortrait(info.championName)}
          alt={info.championName}
        />
        <LevelWrapper></LevelWrapper>
      </PortraitWrapper>
    </Box>
  );
};

const Box = styled.div`
  width: 20%;
  aspect-ratio: 1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const PortraitWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const LevelWrapper = styled.span`
  ${typography.content.md2.sb};
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
