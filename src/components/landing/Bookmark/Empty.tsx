import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { ReactComponent as Empty } from "@assets/empty.svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface Props {
  isLogined: boolean;
}

const EmptyComponent = ({ isLogined }: Props) => {
  const navigate = useNavigate();
  const content = {
    title: isLogined
      ? "궁금한 소환사 검색하고\n북마크하기!"
      : "로그인하고\n관심있는 소환사 북마크하기!",
    button: isLogined ? "검색하기" : "로그인",
    handler: () => (isLogined ? null : navigate("/login")),
  };
  return (
    <Container>
      <Empty style={{ width: "100%" }} />
      <Wrapper>
        <Title>{content.title}</Title>
        <Button onClick={content.handler}>{content.button}</Button>
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
