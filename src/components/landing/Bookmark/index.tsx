import styled from "@emotion/styled";
import BookmarkContent, { BookmarkInfo } from "./BookmarkContent";
import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";

interface Props {
  datas: Array<BookmarkInfo>;
}

/**
 * 북마크 박스
 */
const Bookmark = ({ datas }: Props) => {
  return (
    <Container>
      {datas.map((data) => (
        <ContentWrapper key={data.bookmarkId}>
          <BookmarkContent data={data} />
        </ContentWrapper>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 90%;
  max-width: 1550px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  list-style-type: none;
  margin: 0px;
  padding: 15px;

  ${mq[3]} {
    width: 45%;
  }
  ${mq[4]} {
    width: 40%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 13px;
  border-radius: 8px;
  transition: all 0.25s;

  &:hover {
    background-color: ${colors.white};
  }
`;

export default Bookmark;
