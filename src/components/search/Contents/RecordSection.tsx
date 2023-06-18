import styled from "@emotion/styled";
import RecordBox from "../RecordBox";
import { SearchResult } from "../interface";
import { useEffect, useRef } from "react";
import { Caption } from "../Report/style";
import { css } from "@emotion/react";
import { colors } from "@/styles/tokens";

interface Props {
  data: SearchResult;
  moveToAnalysis: () => void;
  loadMore: () => void;
  end: boolean;
}

/** 실제로 전적이 보여지는 섹션 */
const RecordSection = ({ data, moveToAnalysis, loadMore, end }: Props) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastRecordBoxElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (lastRecordBoxElementRef.current) {
      observer.current.observe(lastRecordBoxElementRef.current);
    }

    return () => {
      if (lastRecordBoxElementRef.current) {
        observer.current?.unobserve(lastRecordBoxElementRef.current);
      }
    };
  }, [loadMore]);

  const EndCaption = () => {
    return end ? (
      <Caption
        css={css`
          text-align: center;
          color: ${colors.gray20};
        `}
      >{`현재까지 분석된 모든 전적 검색이 완료되었어요.\n24시간에 한 번 씩 분석 데이터를 갱신할 수 있어요.`}</Caption>
    ) : (
      <></>
    );
  };

  return (
    <Container>
      {data.gameInfos.map((match, index) => {
        if (index === data.gameInfos.length - 1) {
          return (
            <LastElementWrapper
              ref={lastRecordBoxElementRef}
              key={match.gameId}
            >
              <RecordBox match={match} moveToAnalysis={moveToAnalysis} />
            </LastElementWrapper>
          );
        } else {
          return (
            <RecordBox
              match={match}
              key={match.gameId}
              moveToAnalysis={moveToAnalysis}
            />
          );
        }
      })}
      <EndCaption />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.2rem;
`;

const LastElementWrapper = styled.div`
  width: 100%;
`;
export default RecordSection;
