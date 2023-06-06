import styled from "@emotion/styled";
import Title from "./Title";
import { colors, typography } from "@/styles/tokens";
import useMobile from "@/hooks/useMobile";

const LeftNavigation = () => {
  const isMobile = useMobile();

  /**
   * PC에서만 보이는 네비게이션 바
   */
  const PCView = () => {
    return !isMobile ? (
      <>
        <Vertical />
        <Menu>About DE:BOOST</Menu>
      </>
    ) : (
      <></>
    );
  };

  return (
    <NavigationList>
      <Title />
      <PCView />
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const Vertical = styled.div`
  width: 2px;
  height: 15px;
  border-radius: 100%;
  background-color: ${colors.gray30};
`;

const Menu = styled.span`
  ${typography.content.md2.eb};
  color: ${colors.gray30};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    color: ${colors.white};
  }
`;

export default LeftNavigation;