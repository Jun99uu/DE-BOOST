import Lottie from "lottie-react";
import gamer from "@assets/lottie/gamer.json";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { mq } from "@/styles/breakpoints";

/**
 * 로띠가 들어간 왼쪽 섹션
 */
const LeftSection = () => {
  return (
    <Container>
      <Lottie animationData={gamer} style={{ height: "50%" }} />
    </Container>
  );
};

const moveToRight = keyframes`
    from{
        left: -50rem;
    }
    to{
        left: 0rem;
    }
`;

const moveToRightPC = keyframes`
    from{
        left: -50rem;
    }
    to{
        left: 28%;
    }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${moveToRight} 1s;
  top: 20rem;

  ${mq[3]} {
    top: 0rem;
    left: 28%;
    transform: translateX(-50%);
    animation: ${moveToRightPC} 1.3s;
  }
`;

export default LeftSection;
