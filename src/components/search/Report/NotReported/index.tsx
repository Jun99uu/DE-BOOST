import Lottie from "lottie-react";
import notfound from "@assets/lottie/notfound.json";
import { Button, Container, ContentsWrapper, Subtitle, Title } from "../style";
import useMobile from "@/hooks/useMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { postAnalysis } from "@/libs/api/apis";

interface Props {
  name: string;
  tempRegister?: () => void;
}

/** 종합 분석이 되지 않은 상태 */
const NotReported = ({ name, tempRegister }: Props) => {
  const isMobile = useMobile();

  const register = () => {
    postAnalysis(name)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Lottie
        animationData={notfound}
        style={{ width: isMobile ? "50%" : "25%" }}
      />
      <ContentsWrapper>
        <Title>종합 분석을 진행한 적 없는 소환사네요!</Title>
        <Subtitle>종합 분석을 원한다면, 아래 버튼을 클릭해주세요.</Subtitle>
      </ContentsWrapper>
      <Button onClick={tempRegister ? tempRegister : register}>
        <span>종합 분석 신청하기</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  );
};

export default NotReported;
