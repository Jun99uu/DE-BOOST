import styled from "@emotion/styled";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

const Navigation = () => {
  return (
    <Container>
      <LeftNavigation />
      <RightNavigation />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export default Navigation;
