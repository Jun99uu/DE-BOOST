import useBookmark from "@/hooks/useBookmark";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface BookmarkInfo {
  bookmarkId: number;
  bookmarkGamerName: string;
}

interface Props {
  data: BookmarkInfo;
}

/**
 * 북마크 한 줄
 */
const BookmarkContent = ({ data }: Props) => {
  const [name, setName] = useState(data.bookmarkGamerName);
  const [bookmarked, setBookmarked] = useState(true);
  const navigate = useNavigate();
  const { list, isBookmark, onBookmark } = useBookmark();

  const starColor = bookmarked ? "#F4BE37" : colors.gray30;

  const settingBookmark = () => {
    setBookmarked(isBookmark(name));
  };

  const onMove = () => {
    navigate(`/search/${data.bookmarkGamerName}`);
  };

  useEffect(() => {
    settingBookmark();
  }, [list]);

  return (
    <ContentWrapper onClick={onMove}>
      <InfoWrapper>
        <NationTag>KR</NationTag>
        <Name>{data.bookmarkGamerName}</Name>
      </InfoWrapper>
      <ButtonWrapper
        onClick={(event) => {
          event.stopPropagation();
          onBookmark(name);
        }}
      >
        <FontAwesomeIcon icon={faStar} color={starColor} />
      </ButtonWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const InfoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const NationTag = styled.span`
  ${typography.content.md2.eb};
  color: white;
  padding: 2px 5px;
  background-color: ${colors.primary};
  border-radius: 3px;
  cursor: default;
`;

const Name = styled.span`
  ${typography.content.md1.sb};
  color: ${colors.gray10};
`;

const ButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 100%;
  font-size: 16px;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: #f4be372b;
  }

  &:active {
    background-color: #f4be3741;
  }
`;

export default BookmarkContent;
