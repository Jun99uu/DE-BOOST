import styled from "@emotion/styled";
import { GameData } from "../../interface";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { getItem, getPortrait, getTier } from "@/libs/getRes";
import { css } from "@emotion/react";
import { colors, typography } from "@/styles/tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faDragon, faGhost } from "@fortawesome/free-solid-svg-icons";

interface Props {
  data: GameData;
}

/** 프로필 컴포넌트 */
const Profile = ({ data }: Props) => {
  const user = useRecoilValue(userNameState);

  const NameSection = () => {
    return (
      <NameWrapper>
        <span
          css={css`
            ${typography.subtitle.lg.bd};
            color: ${colors.black};
          `}
        >
          {data.summonerName}
        </span>
        <span
          css={css`
            ${typography.content.md1.sb};
            color: ${colors.gray};
          `}
        >
          {user.tier}
        </span>
      </NameWrapper>
    );
  };

  const GradeSection = () => {
    return (
      <GradesWrapper>
        <span
          css={css`
            color: ${colors.darkest};
          `}
        >
          {data.kills}
        </span>
        <span
          css={css`
            color: ${colors.light};
          `}
        >
          /
        </span>
        <span
          css={css`
            color: ${colors.negative};
          `}
        >
          {data.deaths}
        </span>
        <span
          css={css`
            color: ${colors.light};
          `}
        >
          /
        </span>
        <span
          css={css`
            color: ${colors.darkest};
          `}
        >
          {data.assists}
        </span>
      </GradesWrapper>
    );
  };

  const ObjectSection = () => {
    return (
      <ObjectWrapper>
        <ObjectContent>
          <FontAwesomeIcon icon={faGhost} />
          <span>{data.totalMinionsKilled}</span>
        </ObjectContent>
        <ObjectContent>
          <FontAwesomeIcon icon={faCoins} />
          <span>{data.goldEarned}</span>
        </ObjectContent>
        <ObjectContent>
          <FontAwesomeIcon icon={faDragon} />
          <span>{data.dragonKills + data.baronKills}</span>
        </ObjectContent>
      </ObjectWrapper>
    );
  };

  const ItemSection = () => {
    const items = [
      getItem(data.item0),
      getItem(data.item1),
      getItem(data.item2),
      getItem(data.item3),
      getItem(data.item4),
      getItem(data.item5),
    ];
    const ward = getItem(data.item6);

    return (
      <ItemsWrapper>
        {items.map((item, idx) =>
          item ? <Item src={item} alt="item" key={item} /> : <Empty key={idx} />
        )}
        <Ward src={ward!} alt="ward" />
      </ItemsWrapper>
    );
  };

  return (
    <Container>
      <ImageWrapper>
        <Portrait src={getPortrait(data.championName)} />
        <Frame src={getTier(user.tier)} alt={user.tier} />
      </ImageWrapper>
      <NameSection />
      <InfoWrapper>
        <GradeSection />
        <ObjectSection />
      </InfoWrapper>
      <ItemSection />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
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

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin-top: 35px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
`;

const GradesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${typography.subtitle.lg.eb};
  gap: 3px;
`;

const ObjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ObjectContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${colors.gray};
  ${typography.caption.lg.sb};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

const Item = styled.img`
  width: 3.3rem;
  height: 3.3rem;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`;

const Empty = styled.div`
  background-color: #66666643;
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 5px;
`;

const Ward = styled.img`
  width: 2.1rem;
  height: 2.1rem;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
`;

export default Profile;
