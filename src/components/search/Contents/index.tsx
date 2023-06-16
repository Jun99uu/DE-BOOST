import styled from "@emotion/styled";
import Navigation, { MENU } from "./Navigation";
import { useState } from "react";
import { Props } from "../Profile/interface";
import RecordSection from "./RecordSection";
import { mq } from "@/styles/breakpoints";
import { NotReported, Reporting } from "../Report";

/**
 * 전적이 표시되는 콘텐츠 섹션 내부
 */
const Contents = ({ data }: Props) => {
  const [menu, setMenu] = useState<MENU>(MENU.game);

  const selectMenu = (menu: MENU) => {
    setMenu(menu);
  };

  /** 인게임 / 종합분석 내용이 보여지는 부분 */
  const ContentsSection = () => {
    switch (menu) {
      case MENU.game:
        return <RecordSection data={data} />;
      case MENU.analyze:
        return <Reporting />;
    }
  };

  return (
    <Container>
      <Navigation menu={menu} selectMenu={selectMenu} />
      <ContentsWrapper>
        <ContentsSection />
      </ContentsWrapper>
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

const ContentsWrapper = styled.div`
  width: 100%;
  padding: 3rem 0rem;

  ${mq[3]} {
    padding: 3rem 1rem;
  }
`;

export default Contents;
