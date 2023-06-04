import styled from "@emotion/styled";
import LeftNavigation from "./LeftNavigation";

const Navigation = () => {
  return (
    <Container>
      <LeftNavigation />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Navigation;
