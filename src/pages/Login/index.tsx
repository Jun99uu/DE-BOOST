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
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Login;
