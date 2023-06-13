import { Title, Subtitle } from "../NotLogined";
import Lottie from "lottie-react";
import registing from "@assets/lottie/registing.json";
import { css } from "@emotion/react";
import { colors, typography } from "@/styles/tokens";
import { useNavigate, useParams } from "react-router-dom";
import { ReactPortal } from "@/components/common";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Progress from "@/components/common/Progress";
import usePercent from "@/hooks/usePercent";
import useMobile from "@/hooks/useMobile";

/** 해당 소환사가 최초 업데이트 되지 않은 경우 */
const NotRegister = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const percent = usePercent(); //TODO 콜백 통신 연동 필요
  const isMobile = useMobile();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <ReactPortal wrapperId="registing">
      <Container>
        <LoadingWrapper
          css={css`
            transform: ${isMobile ? "scale(0.8)" : ""};
          `}
        >
          <Lottie
            animationData={registing}
            style={{ width: "87%", height: "87%" }}
          />
          <Progress
            percent={percent}
            css={css`
              position: absolute;
            `}
          />
        </LoadingWrapper>
        <Title
          css={css`
            margin-top: 2rem;
          `}
        >
          <Title
            css={css`
              color: ${colors.primary};
            `}
          >
            {name}
          </Title>
          님의 전적을 분석하는 중이에요.
        </Title>
        <Subtitle
          css={css`
            line-height: 2.5rem;
          `}
        >{`최초로 분석되는 경우, 최대 1분 정도 소요될 수 있어요.\n이 페이지를 벗어나도 DE:BOOST가 분석하고 있을테니\n편하게 이동하셔도 괜찮아요!`}</Subtitle>
        <BackLink onClick={onBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            css={css`
              margin-right: 7px;
            `}
          />
          뒤로가기
        </BackLink>
      </Container>
    </ReactPortal>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  z-index: 10;
  gap: 2rem;
`;

const LoadingWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackLink = styled.span`
  ${typography.content.md1.sb};
  color: ${colors.primary};
  cursor: pointer;
  padding: 0px 1.5px 3px 1.5px;
  border-bottom: 1.5px solid ${colors.primary};
`;

export default NotRegister;
