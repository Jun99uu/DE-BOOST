import { getItem } from "@/libs/getRes";
import { ResIcon, WardWrapper } from "./style";
import { GameData } from "../../interface";
import { css } from "@emotion/react";

interface Props {
  info: GameData;
}

/**와드 부분 */
const WardSection = ({ info }: Props) => {
  return (
    <WardWrapper>
      <ResIcon
        src={getItem(info.item6)!}
        css={css`
          width: 20px;
          height: 20px;
        `}
      />
    </WardWrapper>
  );
};

export default WardSection;
