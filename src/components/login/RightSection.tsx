import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as GoogleLogo } from "@assets/Google.svg";

const RightSection = () => {
  const secretKeys = {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirectURI: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
  };

  const onLogin = () => {
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?client_id=" +
      secretKeys.clientId +
      "&redirect_uri=" +
      secretKeys.redirectURI +
      "&response_type=code&scope=email profile openid&access_type=offline&service=lso&o2v=2&flowName=GeneralOAuthFlow";

    location.href = url;
  };

  return (
    <Container>
      <Title>{`DE:BOOST는,\n건전한 게임 문화를 지향합니다.`}</Title>
      <Subtitle>{`AI 부스팅 탐지 기술을 무료로 경험해보세요!`}</Subtitle>
      <GoogleLogin onClick={onLogin}>
        <GoogleLogo />
        <span>Sign in with Google</span>
      </GoogleLogin>
    </Container>
  );
};

const moveToLeft = keyframes`
    from{
        right: -500px;
    }
    to{
        right: 2rem;
    }
`;
const moveToLeftPC = keyframes`
    from{
        right: -500px;
    }
    to{
        right: 0px;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  right: 3rem;
  animation: ${moveToLeft} 1s;
  top: 30%;
  transform: translateY(-50%);

  ${mq[3]} {
    top: 50%;
    left: 50%;
    right: 0rem;
    transform: translate(-25%, -50%);
    animation: ${moveToLeftPC} 1s;
  }
`;

const Title = styled.span`
  ${typography.title.md.bd};
  line-height: 5rem;
  color: ${colors.white};
  white-space: pre-line;
  text-align: end;
  letter-spacing: -0.5px;

  ${mq[2]} {
    ${typography.title.lg.bd};
  }
`;

const Subtitle = styled.span`
  ${typography.subtitle.lg.sb};
  color: ${colors.white};
  text-align: end;
  white-space: pre-line;
`;

const GoogleLogin = styled.button`
  border: none;
  outline: none;
  width: 25rem;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 10px;
  ${typography.content.lg.sb};
  color: ${colors.gray};
  margin-top: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${mq[3]} {
    padding: 13px;
  }
`;

export default RightSection;
