import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { Subtitle, Title, TitleWrapper } from "./style";

interface Props extends ComponentProps<"div"> {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

/**
 * 랜딩 페이지의 [title - subtitle - children]으로 구성된 섹션
 */
const Section = ({ children, title, subtitle, ...props }: Props) => {
  return (
    <Container {...props}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export default Section;
