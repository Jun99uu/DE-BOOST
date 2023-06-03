import { css } from "@emotion/react";
import { mq } from "@/styles/breakpoints";
import { useState, useEffect } from "react";

interface Props {
  /**
   * 자식 컴포넌트
   */
  children: React.ReactNode;
}

/**
 * 디바이스 크기에 맞추어 조절되는 프레임 컴포넌트
 */
const Frame = ({ children }: Props) => {
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
    width: 100vw;
    min-height: calc(${vh}px * 100);

    ${mq[3]} {
      min-height: 100vh;
    }
  `;

  return <div css={backgroundStyle}>{children}</div>;
};

export default Frame;
