import styled from "@emotion/styled";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colors } from "@/styles/tokens";

interface headerProps extends React.ComponentProps<"div"> {
  isLogined: boolean;
}

const Header = ({ isLogined, ...props }: headerProps) => {
  const { pathname } = useLocation();

  const settingBg = useMemo<SerializedStyles>(() => {
    switch (pathname) {
      case "/":
        return css`
          background-color: ${colors.gray};
        `;
      case "/login":
        return css`
          background-color: ${colors.primary};
        `;
      case "/serach":
        return css`
          background-image: url("이미지 URL");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        `;
      default:
        return css`
          background-color: ${colors.gray};
        `;
    }
  }, [pathname]);

  return (
    <Container {...props}>
      <Background css={settingBg} />
      <Navigation />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 65px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 0.15s;
`;

export default Header;
