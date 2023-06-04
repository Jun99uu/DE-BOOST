import styled from "@emotion/styled";
import Logo from "@/assets/Logo";
import { colors, typography } from "@/styles/tokens";
import useMobile from "@/hooks/useMobile";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

/**
 * 로고 컴포넌트
 */
const MainLogo = () => {
  const isMobile = useMobile();
  const [size, setSize] = useState({ width: 480, height: 82 });

  //디바이스 크기에 따라 로고사이즈(svg)가 달라짐
  const settingSize = () => {
    const pcSize = {
      width: 480,
      height: 82,
    };
    const mobileSize = {
      width: 200,
      height: 37,
    };
    setSize(isMobile ? mobileSize : pcSize);
  };

  useEffect(() => {
    settingSize();
  }, [isMobile]);

  return (
    <LogoWrapper>
      <Logo {...size} fill={colors.white} />
      <Title
        css={css`
          white-space: ${isMobile ? "pre-line" : ""};
        `}
      >{`Perfect boosting detection solution\nfrom League of Legends`}</Title>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
`;

const Title = styled.span`
  ${typography.content.lg.sb};
  color: ${colors.white};
  text-align: center;
`;

export default MainLogo;
