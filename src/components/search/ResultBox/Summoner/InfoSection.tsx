import { css } from "@emotion/react";
import { GameData } from "../../interface";
import { GradesWrapper, InfoWrapper } from "./style";
import { colors, typography } from "@/styles/tokens";
import { dateFormatter } from "@/libs/dateCalculator";

interface Props {
  info: GameData;
  endTime?: number;
}

/**정보 부분 */
const InfoSection = ({ info, endTime }: Props) => {
  const grade = ((info.kills + info.assists) / info.deaths).toFixed(2);
  return (
    <InfoWrapper>
      {endTime ? (
        <></>
      ) : (
        <span
          css={css`
            ${typography.caption.lg.reg};
            color: ${colors.gray10};
            white-space: nowrap;
          `}
        >
          {info.summonerName}
        </span>
      )}
      <GradesWrapper>
        <span
          css={css`
            color: ${colors.darkest};
          `}
        >
          {info.kills}
        </span>
        <span
          css={css`
            color: ${colors.light};
          `}
        >
          /
        </span>
        <span
          css={css`
            color: ${colors.negative};
          `}
        >
          {info.deaths}
        </span>
        <span
          css={css`
            color: ${colors.light};
          `}
        >
          /
        </span>
        <span
          css={css`
            color: ${colors.darkest};
          `}
        >
          {info.assists}
        </span>
      </GradesWrapper>
      <span
        css={css`
          ${typography.content.md2.reg};
          color: ${colors.gray10};
        `}
      >
        평점 {grade}
      </span>
      {endTime ? (
        <span
          css={css`
            ${typography.caption.lg.reg};
            color: ${colors.gray10};
          `}
        >
          {dateFormatter(endTime)}
        </span>
      ) : (
        <></>
      )}
    </InfoWrapper>
  );
};

export default InfoSection;
