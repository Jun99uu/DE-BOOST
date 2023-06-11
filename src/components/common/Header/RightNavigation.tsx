import { useLocation, useNavigate } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import { useCallback, useState } from "react";
import useLoginState from "@/hooks/useLogined";
import styled from "@emotion/styled";
import { colors, typography } from "@/styles/tokens";
import { mq } from "@/styles/breakpoints";
import useMobile from "@/hooks/useMobile";
import { Modal, BottomSheet } from "@qve-ui/qds";
import Lottie from "lottie-react";
import robot from "@assets/lottie/robot.json";
import { css } from "@emotion/react";

const RightNavigation = () => {
  const isMobile = useMobile();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = useLoginState();
  const { loginState } = auth;
  const { handleLogout } = auth;

  /** 로그인이 완료되지 않은 상태에서 보이는 로그인 버튼 */
  const Button = useCallback(() => {
    return pathname !== "/login" ? (
      <LoginButton onClick={() => navigate("/login")} />
    ) : (
      <></>
    );
  }, [pathname]);

  /** 로그인이 완료된 상태에서 보이는 프로필 박스 */
  const Info = () => {
    const modalOpen = () => {
      setModal(true);
    };
    return (
      <ProfileWrapper>
        <ProfileName>{`${loginState.name}님, 반가워요!`}</ProfileName>
        <ProfileImage src={loginState.img} onClick={modalOpen} />
      </ProfileWrapper>
    );
  };

  /** 프로필 이미지를 클릭했을 때 나타나는 로그아웃 섹션 */
  const LogoutSection = () => {
    const closeModal = () => {
      setModal(false);
    };

    const onLogout = () => {
      setModal(false);
      handleLogout();
    };

    const Content = () => {
      return (
        <>
          <Lottie
            animationData={robot}
            style={{ width: isMobile ? "50%" : "30%" }}
          />
          <Title>정말 로그아웃 하실건가요?</Title>
          <Subtitle>
            {`DE:BOOST가 마음에 드셨다면,\n`}
            <Subtitle
              css={css`
                font-size: 1.7rem;
                cursor: pointer;
                color: ${colors.primary};
                padding-bottom: 1px;
                border-bottom: 2px solid ${colors.primary};
              `}
            >
              이곳
            </Subtitle>
            {`에서 광고를 봐주시면 안될까요?`}
          </Subtitle>
          <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
        </>
      );
    };

    return isMobile ? (
      <BottomSheet
        isOpen={modal}
        onClose={closeModal}
        ratio={60}
        xButton={true}
      >
        <MobileLogoutWrapper>
          <Content />
        </MobileLogoutWrapper>
      </BottomSheet>
    ) : (
      <Modal isOpen={modal} onClose={closeModal} xButton={true}>
        <PCLogoutWrapper>
          <Content />
        </PCLogoutWrapper>
      </Modal>
    );
  };

  return (
    <>
      {loginState.isLogined ? <Info /> : <Button />}
      <LogoutSection />
    </>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProfileName = styled.span`
  ${typography.caption.lg.sb};
  color: ${colors.white};
  text-align: end;
  display: none;

  ${mq[3]} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
  cursor: pointer;
`;

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const PCLogoutWrapper = styled.div`
  width: 50vw;
  height: 100%;
  height: 500px;
  background-color: ${colors.white};
  border-radius: 20px;
  ${flex};
`;

const MobileLogoutWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 20px 20px 0px 0px;
  ${flex};
`;

const Title = styled.span`
  ${typography.subtitle.xl.bd};
  color: ${colors.black};
  letter-spacing: -0.2px;
`;

const Subtitle = styled.span`
  text-align: center;
  white-space: pre-line;
  ${typography.content.md1.sb};
  color: ${colors.gray};
  line-height: 2.5rem;
`;

const LogoutButton = styled.button`
  width: 80%;
  padding: 15px;
  border-radius: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
  ${typography.content.md2.eb};
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`;
export default RightNavigation;
