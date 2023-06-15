import { getItem } from "@/libs/getRes";
import { ResIcon, WardWrapper } from "./style";
import { GameData } from "../../interface";
import { css } from "@emotion/react";
import { mq } from "@/styles/breakpoints";

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
          width: 17px;
          height: 17px;

          ${mq[3]} {
            width: 20px;
            height: 20px;
          }
        `}
      />
    </WardWrapper>
  );
};

export default WardSection;
