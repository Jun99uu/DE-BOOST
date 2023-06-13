import { getPortrait } from "@/libs/getRes";
import { LevelWrapper, Portrait, PortraitWrapper } from "./style";
import { GameData } from "../../interface";

interface Props {
  info: GameData;
}

/**챔피언 초상화 + 레벨 부분 */
const PortraitSection = ({ info }: Props) => {
  return (
    <PortraitWrapper>
      <Portrait src={getPortrait(info.championName)} alt={info.championName} />
      <LevelWrapper>{info.champLevel}</LevelWrapper>
    </PortraitWrapper>
  );
};

export default PortraitSection;
