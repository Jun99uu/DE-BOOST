import { css } from "@emotion/react";
import { Caption, Container, ContentsWrapper, Subtitle, Title } from "../style";
import SkeletonUI from "./SkeletonUI";
import { colors } from "@/styles/tokens";

/** 종합 분석 신청 후, 분석 중이라는 문구 */
const Reporting = () => {
  return (
    <Container>
      <SkeletonUI />
      <ContentsWrapper>
        <Title>현재 종합 분석을 진행 중 입니다.</Title>
        <Subtitle>잠시만 기다려주세요!</Subtitle>
        <Caption
          color={colors.gray}
          css={css`
            text-align: center;
            margin-top: 1rem;
          `}
        >{`트랜스포머 모델 기반 DE:BOOST AI가\n해당 소환사의 10개의 매치를 기준으로 종합 분석을 진행 중 입니다.\n분석은 30초에서 1분정도 소요되며,\n클라우드에서 분석이 진행되고 있기에 현재 페이지를 벗어나도 괜찮습니다.`}</Caption>
      </ContentsWrapper>
    </Container>
  );
};

export default Reporting;
