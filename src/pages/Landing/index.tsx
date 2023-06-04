import SearchSection from "@/components/landing/SearchSection";
import styled from "@emotion/styled";

/**
 * 최초 시작 페이지 (랜딩)
 */
const Landing = () => {
  return (
    <Container>
      <SearchSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default Landing;
