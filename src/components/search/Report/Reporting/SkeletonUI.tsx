import { mq } from "@/styles/breakpoints";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Skeleton } from "@qve-ui/qds";

/** 분석 결과 형태의 스켈레톤 UI */
const SkeletonUI = () => {
  return (
    <ListWrapper>
      <Skeleton css={squareStyle} />
      <List>
        {listStyles.map((style, idx) => (
          <Skeleton css={style} key={`idx_${idx}`} />
        ))}
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  height: 13rem;
  align-items: center;
  gap: 1rem;
  filter: brightness(0.98);

  ${mq[3]} {
    width: 50%;
  }
`;

const List = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const squareStyle = css`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
`;

const listStyles = [
  css`
    width: 30%;
    border-radius: 0.6rem;
    height: 23.5%;
  `,
  css`
    width: 75%;
    border-radius: 0.6rem;
    height: 23.5%;
  `,
  css`
    width: 55%;
    border-radius: 0.6rem;
    height: 23.5%;
  `,
  css`
    width: 100%;
    border-radius: 0.6rem;
    height: 23.5%;
  `,
];

export default SkeletonUI;
