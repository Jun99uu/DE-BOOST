import { useLocation, useNavigate } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import { useCallback } from "react";

const RightNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Button = useCallback(() => {
    return pathname !== "/login" ? (
      <LoginButton onClick={() => navigate("/login")} />
    ) : (
      <></>
    );
  }, [pathname]);

  return <Button />;
};

export default RightNavigation;
