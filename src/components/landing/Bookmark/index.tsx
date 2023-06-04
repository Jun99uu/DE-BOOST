import styled from "@emotion/styled";
import BookmarkContent, { BookmarkInfo } from "./BookmarkContent";
import { mq } from "@/styles/breakpoints";
import { colors } from "@/styles/tokens";
import { useEffect, useState } from "react";
import ExtendButton from "./ExtendButton";

interface Props {
  datas: Array<BookmarkInfo>;
}

/**
 * 북마크 박스
 */
const Bookmark = ({ datas }: Props) => {
  const [marks, setMarks] = useState<Array<Array<BookmarkInfo>>>([]);
  const [curIdx, setCurIdx] = useState(0);

  //datas를 5개씩 분리하는 함수
  const cuttingDatas = (array: Array<BookmarkInfo>) => {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + 5));
      index += 5;
    }
    setMarks(chunkedArray);
  };

  //확장함수
  const onExtend = () => {
    setCurIdx((prev) => prev + 1);
  };

  //배열 값과 인덱스에 따라 표시되는 확장버튼
  const ArrayExtendButton = () => {
    return marks.length > curIdx + 1 ? (
      <ExtendButton onClick={onExtend} />
    ) : (
      <></>
    );
  };

  useEffect(() => {
    cuttingDatas(datas);
  }, [datas]);

  return (
    <Container>
      {marks.map((mark, idx) =>
        idx <= curIdx ? (
          mark.map((data) => (
            <ContentWrapper key={data.bookmarkId}>
              <BookmarkContent data={data} />
            </ContentWrapper>
          ))
        ) : (
          <></>
        )
      )}
      <ArrayExtendButton />
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
