import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { GameData } from "../interface";
import { getItem, getPortrait, getSpell } from "@/libs/getRes";
import { css } from "@emotion/react";
import { dateFormatter } from "@/libs/dateCalculator";
import { useEffect, useState } from "react";

interface Props extends React.ComponentProps<"div"> {
  endTime?: number;
  info: GameData;
  type?: "win" | "lose" | "basic";
}

/**
 * 검색된 플레이어 본인에 대한 박스
 */
const Summoner = ({ info, endTime, type, ...props }: Props) => {
  const [styleType, setStyleType] = useState(css``);

  useEffect(() => {
    if (type) {
      switch (type) {
        case "win":
          setStyleType(win);
          break;
        case "lose":
          setStyleType(lose);
          break;
        case "basic":
          setStyleType(basic);
          break;
      }
    } else setStyleType(css``);
  }, []);

  /**챔피언 초상화 + 레벨 부분 */
  const PortraitSection = () => {
    return (
      <PortraitWrapper>
        <Portrait
          src={getPortrait(info.championName)}
          alt={info.championName}
        />
        <LevelWrapper>{info.champLevel}</LevelWrapper>
      </PortraitWrapper>
    );
  };

  /**스펠 부분 */
  const SpellSection = () => {
    const spells = [getSpell(info.summoner1Id), getSpell(info.summoner2Id)];
    return (
      <SpellWrapper>
        {spells.map((spell) => (
          <SpellIcon src={spell} key={spell} />
        ))}
      </SpellWrapper>
    );
  };

  /**정보 부분 */
  const InfoSection = () => {
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

  /**아이템 부분(와드 제외) */
  const ItemSection = () => {
    const items = [
      getItem(info.item0),
      getItem(info.item1),
      getItem(info.item2),
      getItem(info.item3),
      getItem(info.item4),
      getItem(info.item5),
    ];
    return (
      <ItemWrapper>
        {items.map((item) =>
          item ? <ResIcon src={item} key={item} /> : <EmptyBox />
        )}
      </ItemWrapper>
    );
  };

  /**와드 부분 */
  const WardSection = () => {
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

  return (
    <Container css={styleType} {...props}>
      <PortraitSection />
      <SpellSection />
      <InfoSection />
      <ItemSection />
      <WardSection />
    </Container>
  );
};

const basic = css`
  background-color: #f6f6f6;
  border: 0.5px solid ${colors.gray30};
  box-shadow: 0px;
`;

const win = css`
  background-color: ${colors.primary10};
  border: 0.5px solid ${colors.primary};
  box-shadow: 0px;
`;

const lose = css`
  background-color: ${colors.negative10};
  border: 0.5px solid ${colors.negative};
  box-shadow: 0px;
`;

const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 29px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  gap: 5px;
`;

const PortraitWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1;
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

const SpellWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: 8px;
`;

const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  margin-left: 5px;
  gap: 2px;
`;

const GradesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${typography.subtitle.lg.eb};
  gap: 3px;
`;

const ItemWrapper = styled.div`
  width: 105px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
`;

const WardWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const ResIcon = styled.img`
  height: 50%;
  aspect-ratio: 1;
  border-radius: 5px;
`;

const SpellIcon = styled.img`
  height: 40%;
  aspect-ratio: 1;
  border-radius: 5px;
`;

const EmptyBox = styled.div`
  height: 50%;
  aspect-ratio: 1;
  border-radius: 5px;
  background-color: #6666662f;
`;

export default Summoner;
