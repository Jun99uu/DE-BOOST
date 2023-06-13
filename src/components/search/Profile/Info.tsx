import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { Props } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";
import BookmarkButton from "@/components/common/Buttons/BookmarkButton";
import { useState } from "react";

/** 프로필 컴포넌트에서 우측 정보 부분 */
const Info = ({ data }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const onBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

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
          {data.summonerInfo.tier}
        </Tier>
      </Wrapper>
      <BookmarkButton
        isBookmarked={isBookmarked}
        onClick={onBookmark}
        css={css`
          margin-top: 1rem;
        `}
      />
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
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightest};
  color: #3f5366;
  ${typography.caption.md1.sb};
  box-shadow: rgba(0, 0, 0, 0.025) 0px 0px 0px 1px;
`;

export default Info;
