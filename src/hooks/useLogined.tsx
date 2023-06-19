import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import customAPI from "@/libs/api/customApi";
import { loginState as atomLoginState } from "@/store/loginAtom";

const useLoginState = () => {
  const [loginState, setLoginState] = useRecoilState(atomLoginState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("at");
      if (loginState.isLogined) {
        //로그인을 한 경우
        if (token) {
          try {
            const response = await customAPI.get("/my/info", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const { userName, profileImageUrl } = response.data;
            setLoginState((prevLoginState) => ({
              ...prevLoginState,
              name: userName,
              img: profileImageUrl,
            }));
          } catch (error) {
            //정보 갖고오기 실패
            console.error(error);
            setLoginState((prevLoginState) => ({
              ...prevLoginState,
              isLogined: false,
              name: "",
              img: "",
            }));
            localStorage.removeItem("at");
            localStorage.removeItem("rt");
          }
        } else {
          //토큰이 사용불가한 경우
          setLoginState((prevLoginState) => ({
            ...prevLoginState,
            isLogined: false,
            name: "",
            img: "",
          }));
        }
      } else {
        //재접속 등 로그인을 직접하지 않은 경우
        if (token) {
          try {
            const response = await customAPI.get("/my/info", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const { userName, profileImageUrl } = response.data;
            setLoginState({
              isLogined: true,
              name: userName,
              img: profileImageUrl,
            });
          } catch (error) {
            // Failed to fetch user data
            console.error(error);
            setLoginState((prevLoginState) => ({
              ...prevLoginState,
              isLogined: false,
              name: "",
              img: "",
            }));
          }
        }
      }
    };

    fetchUserData();
  }, [loginState.isLogined, setLoginState]);

  useEffect(() => {
    // Handle page reloads
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("isLogined", String(loginState.isLogined));
    });

    const isLoginedInSession = sessionStorage.getItem("isLogined");
    if (isLoginedInSession) {
      setLoginState((prevLoginState) => ({
        ...prevLoginState,
        isLogined: isLoginedInSession === "true",
      }));
      sessionStorage.removeItem("isLogined");
    }
  }, [loginState.isLogined, setLoginState]);

  const handleLogout = () => {
    localStorage.removeItem("at");
    localStorage.removeItem("rt");
    setLoginState({
      isLogined: false,
      name: "",
      img: "",
    });
    navigate("/login"); // Redirect to login page after logout
  };

  return { loginState, handleLogout };
};

export default useLoginState;
