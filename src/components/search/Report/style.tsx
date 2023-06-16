import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 0rem;
  gap: 3rem;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const commonSpan = css`
  text-align: start;
  white-space: pre-line;
  word-break: keep-all;
`;

/** 3.2 */
export const Title = styled.span<{ color?: string }>`
  ${typography.subtitle.lg.bd};
  ${commonSpan};
  color: ${(props) => props.color || colors.darkest};
`;

/**2.0 */
export const Subtitle = styled.span<{ color?: string }>`
  ${typography.content.lg.md};
  ${commonSpan};
  color: ${(props) => props.color || colors.darkest};
`;

/**1.5 */
export const ContentMid = styled.span<{ color?: string }>`
  ${typography.content.md1.md};
  ${commonSpan};
  line-height: 2rem;
  color: ${(props) => props.color || colors.darkest};
`;

/**1.5 */
export const ContentBd = styled.span<{ color?: string }>`
  ${typography.content.md1.sb};
  ${commonSpan};
  line-height: 2rem;
  color: ${(props) => props.color || colors.darkest};
`;

export const Horizon = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray30};
  border-radius: 100%;
`;

/** 레포트에서, 최상단에 요약 행 래퍼 */
export const PreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

/** 본격적인 레포트를 감싸는 컨테이너 */
export const ReportContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4rem;

  ${mq[3]} {
    padding: 0rem 1rem;
  }
`;

/** 레포트 컨테이너 내부에 타이틀이 있는 박스 */
export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.5rem;
`;

/** 캐리레이팅 / 일반 지표 분석에서 보여지는 row 축 래퍼 */
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DownLoadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const LinkSpan = styled.span`
  padding-bottom: 0.2rem;
  border-bottom: 1px solid ${colors.lightBlack};
  cursor: pointer;
`;

export const Button = styled.button`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  outline: none;
  background-color: ${colors.primary};
  color: white;
  ${typography.content.md1.bd};
  padding: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;
