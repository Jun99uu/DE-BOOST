import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type Win = "win" | "lose" | "basic";

export const PortraitWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1;
  position: relative;
`;

export const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export const LevelWrapper = styled.span`
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

export const SpellWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: 8px;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  margin-left: 5px;

  ${mq[3]} {
    gap: 2px;
  }
`;

export const GradesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${typography.subtitle.lg.eb};
  gap: 3px;
`;

export const ItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3px;

  ${mq[3]} {
    width: 105px;
    justify-content: flex-end;
    gap: 5px;
  }
`;

export const WardWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ResIcon = styled.img`
  height: 50%;
  aspect-ratio: 1;
  border-radius: 5px;
  min-width: 17px;
  min-height: 17px;
`;

export const SpellIcon = styled.img`
  height: 45%;
  aspect-ratio: 1;
  border-radius: 5px;
`;

export const EmptyBox = styled.div`
  min-width: 17px;
  min-height: 17px;
  height: 50%;
  aspect-ratio: 1;
  border-radius: 5px;
  background-color: #6666662f;
`;

export const basic = css`
  background-color: #f6f6f6;
  border: 0.5px solid ${colors.gray30};
  box-shadow: 0px;
`;

export const win = css`
  background-color: ${colors.primary10};
  border: 0.5px solid ${colors.primary};
  box-shadow: 0px;
`;

export const lose = css`
  background-color: ${colors.negative10};
  border: 0.5px solid ${colors.negative};
  box-shadow: 0px;
`;

export const Container = styled.div<{ win?: Win }>`
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
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.win
        ? props.win === "win"
          ? colors.primary10
          : colors.negative10
        : ""};
  }
`;
