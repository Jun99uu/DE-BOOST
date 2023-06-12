import styled from "@emotion/styled";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colors } from "@/styles/tokens";
import { HeaderBg } from "@/assets/HeaderBg";
import SearchInput from "./SearchInput";

interface headerProps extends React.ComponentProps<"div"> {
  isLogined: boolean;
}

const Header = ({ isLogined, ...props }: headerProps) => {
  const { pathname } = useLocation();
  const [isSearch, setIsSearch] = useState(false);

  const settingBg = useMemo<SerializedStyles>(() => {
    if (pathname.includes("/search")) {
      return css`
        background-image: ${`url(${
          HeaderBg[Math.floor(Math.random() * HeaderBg.length)]
        })`};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(0.5);
      `;
    }

    switch (pathname) {
      case "/":
        return css`
          background-color: ${colors.gray};
        `;
      case "/login":
        return css`
          background-color: ${colors.primary};
        `;
      default:
        return css`
          background-color: ${colors.gray};
        `;
    }
  }, [pathname]);

  useEffect(() => {
    setIsSearch(pathname.includes("/search"));
  }, [pathname]);

  const SearchSection = () => {
    return isSearch ? (
      <BottomWrapper>
        <SearchInput />
      </BottomWrapper>
    ) : (
      <></>
    );
  };

  return (
    <Container {...props}>
      <TopWrapper>
        <Background css={settingBg} />
        <Navigation />
      </TopWrapper>
      <SearchSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  z-index: 10;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
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
