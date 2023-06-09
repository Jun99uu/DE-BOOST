import styled from "@emotion/styled";
import { GameData } from "../../interface";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { getPortrait, getTier } from "@/libs/getRes";

interface Props {
  data: GameData;
}

/** 프로필 컴포넌트 */
const Profile = ({ data }: Props) => {
  const user = useRecoilValue(userNameState);
  return (
    <Container>
      <ImageWrapper>
        <Portrait src={getPortrait(data.championName)} />
        <Frame src={getTier(user.tier)} alt={user.tier} />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
`;

const Frame = styled.img`
  width: 190%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Profile;
