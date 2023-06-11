import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { ReactComponent as Empty } from "@assets/empty.svg";
import styled from "@emotion/styled";

interface Props {
  isLogined: boolean;
}

const EmptyComponent = ({ isLogined }: Props) => {
  const content = {
    title: isLogined
      ? "궁금한 소환사 검색하고\n분석 신청하기!"
      : "로그인하고\n궁금한 소환사 분석하기!",
    button: isLogined ? "검색하기" : "로그인",
  };
  return (
    <Container>
      <Empty style={{ width: "100%" }} />
      <Wrapper>
        <Title>{content.title}</Title>
        <Button>{content.button}</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  ${mq[3]} {
    width: 30%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.span`
  ${typography.content.lg.sb};
  color: ${colors.darkest};
  text-align: center;
  white-space: pre-line;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 500px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 10px 20px;
`;

export default EmptyComponent;
