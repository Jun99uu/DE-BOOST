import styled from "@emotion/styled";
import MainLogo from "../common/MainLogo";
import StarVideo from "@assets/video/star.mp4";

const SearchSection = () => {
  return (
    <Container>
      <BgVideo muted autoPlay loop src={StarVideo} />
      <BgWrapper />
      <MainLogo />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 150px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default SearchSection;
