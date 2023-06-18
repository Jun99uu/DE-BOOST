import Seo from "@/components/common/Seo";
import { LeftSection, RightSection } from "@/components/login";
import { Subtitle, Title } from "@/components/search/NotLogined";
import { LinkSpan } from "@/components/search/Report/style";
import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 로그인 페이지
 */
const NotFound = () => {
  const [vh, setVh] = useState(0);
  const navigate = useNavigate();

  const mobileScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    setVh(vh);
  };

  useEffect(() => {
    mobileScreenSize();
    window.addEventListener("resize", () => mobileScreenSize());
    return () => {
      window.removeEventListener("resize", mobileScreenSize);
    };
  }, []);

  const backgroundStyle = css`
    width: 100%;
    height: calc(${vh}px * 100);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    gap: 2rem;

    ${mq[3]} {
      min-height: 100vh;
    }
  `;

  const goHome = () => {
    navigate("/");
  };

  return (
    <div css={backgroundStyle}>
      <Seo title="Not Found" />
      <Title>페이지를 찾을 수 없습니다.</Title>
      <Subtitle
        css={css`
          cursor: pointer;
          padding-bottom: 2px;
          border-bottom: 2px solid ${colors.gray};
        `}
        onClick={goHome}
      >
        홈으로 돌아가기
      </Subtitle>
    </div>
  );
};

export default NotFound;
