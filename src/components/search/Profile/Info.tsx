import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { Props } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faRotate } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";
import BookmarkButton from "@/components/common/Buttons/BookmarkButton";
import { convertToRomanNumber } from "@/libs/toRome";
import useBookmark from "@/hooks/useBookmark";
import { useEffect, useState } from "react";

interface InfoProps extends Props {
  update: () => void;
}

/** 프로필 컴포넌트에서 우측 정보 부분 */
const Info = ({ data, update }: InfoProps) => {
  const [bookmarked, setBookmarked] = useState(false);
  const { list, isBookmark, onBookmark } = useBookmark(true);

  const settingBookmarked = () => {
    const newIsBookmark = isBookmark(data.summonerInfo.summonerName);
    setBookmarked(newIsBookmark);
  };

  const bookmarking = () => {
    onBookmark(data.summonerInfo.summonerName);
  };

  useEffect(() => {
    settingBookmarked();
  }, [list]);

  return (
    <Container>
      <Wrapper>
        <Name>{data.summonerInfo.summonerName}</Name>
        <Country>KR</Country>
      </Wrapper>
      <Wrapper>
        <Season>Season 13</Season>
        <Tier>
          <FontAwesomeIcon
            icon={faCrown}
            css={css`
              margin-right: 0.2rem;
            `}
          />
          {data.summonerInfo.tier}{" "}
          {convertToRomanNumber(data.summonerInfo.rank)}
        </Tier>
      </Wrapper>
      <Wrapper
        css={css`
          margin-top: 1rem;
          height: 4.2rem;
        `}
      >
        <BookmarkButton isBookmarked={bookmarked} onClick={bookmarking} />
        <ReloadButton available={!data.updated} onClick={update}>
          <FontAwesomeIcon icon={faRotate} />
        </ReloadButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  cursor: default;
`;

const Name = styled.span`
  ${typography.subtitle.xl.bd};
  color: ${colors.black};
  text-align: start;
`;

const Country = styled.span`
  ${typography.caption.md1.sb};
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
`;

const Season = styled.span`
  ${typography.content.md2.md};
  color: ${colors.darkest};
  text-align: start;
`;

const Tier = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  height: 1.7rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightest};
  color: #3f5366;
  ${typography.caption.md1.sb};
  box-shadow: rgba(0, 0, 0, 0.025) 0px 0px 0px 1px;
`;

const ReloadButton = styled.button<{ available: boolean }>`
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.content.md2.sb};
  gap: 0.5rem;
  border: 2px solid
    ${(props) => (props.available ? colors.primary : colors.gray20)};
  border-radius: 1rem;
  transition: all 0.2s;
  color: ${(props) => (props.available ? colors.primary : colors.gray20)};
  cursor: ${(props) => (props.available ? "pointer" : "default")};
  background-color: ${(props) =>
    props.available ? colors.white : colors.gray30};

  &:hover {
    background-color: ${(props) =>
      props.available ? colors.primary10 : colors.gray30};
  }
`;

export default Info;
