import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";

export const Title = styled.span`
  ${typography.subtitle.xl.bd};
  color: ${colors.gray};
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
`;

export const Subtitle = styled.span`
  ${typography.content.lg.md};
  color: ${colors.gray};
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
