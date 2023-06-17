import styled from "@emotion/styled";
import RecordBox from "../RecordBox";
import { SearchResult } from "../interface";
import { useEffect, useRef } from "react";

interface Props {
  data: SearchResult;
  moveToAnalysis: () => void;
  loadMore: () => void;
}

/** 실제로 전적이 보여지는 섹션 */
const RecordSection = ({ data, moveToAnalysis, loadMore }: Props) => {
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
