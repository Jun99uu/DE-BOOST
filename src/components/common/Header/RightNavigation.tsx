import { useLocation, useNavigate } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import { useCallback } from "react";
import useLoginState from "@/hooks/useLogined";
import styled from "@emotion/styled";
import { colors, typography } from "@/styles/tokens";
import { mq } from "@/styles/breakpoints";

const RightNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = useLoginState();
  const { loginState } = auth;
  const { handleLogout } = auth;

  const Button = useCallback(() => {
    return pathname !== "/login" ? (
      <LoginButton onClick={() => navigate("/login")} />
    ) : (
      <></>
    );
  }, [pathname]);

  const Info = () => {
    return (
      <ProfileWrapper>
        <ProfileName>{`${loginState.name}님, 반가워요!`}</ProfileName>
        <ProfileImage src={loginState.img} />
      </ProfileWrapper>
    );
  };

  return loginState.isLogined ? <Info /> : <Button />;
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
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
  cursor: pointer;
`;

export default RightNavigation;
