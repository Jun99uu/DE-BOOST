import { CircleSquare } from "@/components/common/Loading";
import {
  SearchSection,
  BookmarkSection,
  PreviewSection,
} from "@/components/landing";
import { customApi } from "@/libs/api";
import { getParams } from "@/libs/getParams";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Modal } from "@qve-ui/qds";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "@/store/loginAtom";

/**
 * 최초 시작 페이지 (랜딩)
 */
const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [logined, setLogined] = useRecoilState(loginState);
  const navigate = useNavigate();

  const onLogin = (code: string) => {
    customApi
      .get("/login/oauth_google_check", { params: { code: code } })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("at", res.data.accessToken);
        localStorage.setItem("rt", res.data.refreshToken);
        setLogined({ ...logined, isLogined: true });
        navigate("/", { replace: true });
      });
  };

  useEffect(() => {
    const code = getParams("code");
    if (code) onLogin(code);
    else setLoading(false);
  }, []);

  return (
    <Container>
      <SearchSection />
      <BookmarkSection />
      {/* <PreviewSection /> */}
      <Modal isOpen={loading} onClose={() => null}>
        <CircleSquare />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
`;

export default Landing;
