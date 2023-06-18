import Seo from "@/components/common/Seo";
import { LeftSection, RightSection } from "@/components/login";
import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

/**
 * 로그인 페이지
 */
const Login = () => {
  const [vh, setVh] = useState(0);

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
    background-color: ${colors.primary};
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    ${mq[3]} {
      min-height: 100vh;
    }
  `;

  return (
    <div css={backgroundStyle}>
      <Seo
        title="Login"
        description="구글 로그인으로 3초만에 로그인하고, 최신 AI 대리 플레이어 탐지 기술을 즐겨보세요!"
      />
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Login;
