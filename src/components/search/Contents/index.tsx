import styled from "@emotion/styled";
import Navigation, { MENU } from "./Navigation";
import { useState } from "react";
import { Props } from "../Profile/interface";

/**
 * 전적이 표시되는 콘텐츠 섹션 내부
 */
const Contents = ({ data }: Props) => {
  const [menu, setMenu] = useState<MENU>(MENU.game);

  const selectMenu = (menu: MENU) => {
    setMenu(menu);
  };

  return (
    <Container>
      <Navigation menu={menu} selectMenu={selectMenu} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0rem;
`;

export default Contents;
