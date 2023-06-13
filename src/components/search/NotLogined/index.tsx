import styled from "@emotion/styled";
import Lottie from "lottie-react";
import robot from "@assets/lottie/robot.json";
import useMobile from "@/hooks/useMobile";
import { useNavigate, useParams } from "react-router-dom";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";

const NotLogined = () => {
  const isMobile = useMobile();
  const { name } = useParams();
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Lottie
        animationData={robot}
        style={{ width: isMobile ? "50%" : "25%" }}
      />
      <Title>
        <Title
          css={css`
            color: ${colors.primary};
          `}
        >
          {name}
        </Title>
        님의 전적이 궁금하다면?
      </Title>
      <Subtitle>지금 로그인하고 전국 소환사의 전적을 분석해보세요!</Subtitle>
      <Button onClick={onLogin}>3초만에 로그인하기</Button>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

export const Title = styled.span`
  ${typography.subtitle.xl.bd};
  color: ${colors.black};
`;

export const Subtitle = styled.span`
  ${typography.content.lg.sb};
  color: ${colors.darkest};
  white-space: pre-line;
  text-align: center;
`;

const Button = styled.button`
  width: 28rem;
  padding: 1.5rem;
  background-color: ${colors.primary};
  color: white;
  ${typography.content.lg.sb};
  text-align: center;
  border: none;
  border-radius: 1rem;
  margin-top: 3rem;
  cursor: pointer;
`;

export default NotLogined;
