import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export enum MENU {
  game,
  analyze,
}

interface Props {
  menu: MENU;
  selectMenu: (menu: MENU) => void;
}

const Navigation = ({ menu, selectMenu }: Props) => {
  return (
    <BarWrapper>
      <Bar
        onClick={() => selectMenu(MENU.game)}
        css={menu === MENU.game ? selectedStyle : notSelectedStyle}
      >
        인게임
      </Bar>
      <Bar
        onClick={() => selectMenu(MENU.analyze)}
        css={menu === MENU.analyze ? selectedStyle : notSelectedStyle}
      >
        종합 분석
      </Bar>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Bar = styled.div`
  ${typography.content.md2.eb};
  padding: 1.5rem 3rem;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  cursor: pointer;
`;

const selectedStyle = css`
  background-color: ${colors.gray10};
  color: ${colors.white};
`;

const notSelectedStyle = css`
  background-color: ${colors.light};
  color: ${colors.gray20};
`;

export default Navigation;
