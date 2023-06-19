import styled from "@emotion/styled";
import MainLogo from "../common/MainLogo";
import StarVideo from "@assets/video/star.mp4";
import SearchInput from "./Input";
import { mq } from "@/styles/breakpoints";

const SearchSection = () => {
  return (
    <Container>
      <BgVideo muted autoPlay playsInline loop src={StarVideo} />
      <BgWrapper />
      <ContentWrapper>
        <MainLogo />
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  justify-content: center;
  gap: 15px;
  position: relative;
  overflow: hidden;
`;

const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;

  ${mq[3]} {
    object-position: center -9rem;
  }
  ${mq[6]} {
    object-position: center -18rem;
  }
`;

const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: radial-gradient(
    62.83% 62.83% at 50% 50%,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px;
  position: relative;
  z-index: 1;
  gap: 40px;
`;

const InputWrapper = styled.div`
  width: 95%;

  ${mq[2]} {
    width: 90%;
  }
  ${mq[3]} {
    width: 80%;
  }
  ${mq[4]} {
    width: 700px;
  }
`;

export default SearchSection;
