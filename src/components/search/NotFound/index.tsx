import { Container, Title, Subtitle } from "../NotLogined";
import Lottie from "lottie-react";
import notfound from "@assets/lottie/notfound.json";
import { colors } from "@/styles/tokens";
import { css } from "@emotion/react";
import useMobile from "@/hooks/useMobile";

/** 로그인은 하였지만, 검색 결과가 없는 경우 */
const NotFound = () => {
  const isMobile = useMobile();

  return (
    <Container>
      <Lottie
        animationData={notfound}
        style={{ width: isMobile ? "50%" : "25%" }}
      />
      <Title
        css={css`
          color: ${colors.primary};
          white-space: pre-line;
          text-align: center;
          line-height: 3.8rem;
        `}
      >
        {`등록되지 않았거나,\n랭크 게임을 플레이하지 않은 소환사입니다!`}
      </Title>
      <Subtitle>소환사 이름을 제대로 입력하였는지 확인해주세요.</Subtitle>
    </Container>
  );
};

export default NotFound;
