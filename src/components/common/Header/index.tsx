import styled from "@emotion/styled";
import Navigation from "./Navigation";

interface headerProps extends React.ComponentProps<"div"> {
  isLogined: boolean;
}

const Header = ({ isLogined, ...props }: headerProps) => {
  return (
    <Container {...props}>
      <Navigation />
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
`;

export default Header;
