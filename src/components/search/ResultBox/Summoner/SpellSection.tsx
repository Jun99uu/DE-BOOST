import { getSpell } from "@/libs/getRes";
import { GameData } from "../../interface";
import { SpellIcon, SpellWrapper } from "./style";

interface Props {
  info: GameData;
}

/**스펠 부분 */
const SpellSection = ({ info }: Props) => {
  const spells = [getSpell(info.summoner1Id), getSpell(info.summoner2Id)];
  return (
    <SpellWrapper>
      {spells.map((spell) => (
        <SpellIcon src={spell} key={spell} />
      ))}
    </SpellWrapper>
  );
};

export default SpellSection;
