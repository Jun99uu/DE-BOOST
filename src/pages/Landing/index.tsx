import {
  SearchSection,
  BookmarkSection,
  PreviewSection,
} from "@/components/landing";
import styled from "@emotion/styled";

/**
 * 최초 시작 페이지 (랜딩)
 */
const Landing = () => {
  return (
    <Container>
      <SearchSection />
      <BookmarkSection />
      <PreviewSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
`;

export default Landing;
