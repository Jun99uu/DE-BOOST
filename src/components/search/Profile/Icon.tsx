import { getIcon } from "@/libs/getRes";
import { colors, typography } from "@/styles/tokens";
import { Props } from "./interface";
import styled from "@emotion/styled";

/** 프로필 컴포넌트 왼쪽 사용자 아이콘 부분 */
const Icon = ({ data }: Props) => {
  return (
    <ProfileImageWrapper>
      <ProfileImage
        src={getIcon(data.summonerInfo.summonerIconId)}
        alt={data.summonerInfo.summonerName}
      />
      <LevelWrapper>{data.summonerInfo.summonerLevel}</LevelWrapper>
    </ProfileImageWrapper>
  );
};

const ProfileImageWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const LevelWrapper = styled.span`
  padding: 0.5rem 1.5rem;
  background-color: ${colors.black};
  color: ${colors.white};
  ${typography.caption.lg.sb};
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-radius: 1rem 0rem 0rem 0rem;
`;

export default Icon;
