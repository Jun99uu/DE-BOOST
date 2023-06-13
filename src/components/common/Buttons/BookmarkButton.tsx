import { colors, typography } from "@/styles/tokens";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, useEffect, useState } from "react";

interface Props extends ComponentProps<"button"> {
  isBookmarked: boolean;
}

interface ButtonContent {
  content: string;
  style: SerializedStyles;
}

const BookmarkButton = ({ isBookmarked, ...props }: Props) => {
  const bookmark: ButtonContent = {
    content: "북마크한 소환사입니다",
    style: css`
      color: ${colors.white};
      background-color: ${colors.primary};
    `,
  };
  const notBookmark: ButtonContent = {
    content: "북마크하고 부스팅 종합 분석하기",
    style: css`
      color: ${colors.primary};
      background-color: ${colors.white};
    `,
  };

  const [content, setContent] = useState<ButtonContent>(notBookmark);

  const settingContent = () => {
    if (isBookmarked) setContent(bookmark);
    else setContent(notBookmark);
  };

  useEffect(() => {
    settingContent();
  }, [isBookmarked]);

  return (
    <Button css={content.style} isBookmarked={isBookmarked} {...props}>
      {content.content}
      <FontAwesomeIcon
        icon={faStar}
        css={css`
          padding-bottom: 3px;
        `}
      />
    </Button>
  );
};

const Button = styled.button<{ isBookmarked: boolean }>`
  padding: 1.2rem 2rem;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid ${colors.primary};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  ${typography.content.md2.sb};

  &:hover {
    background-color: ${(props) =>
      props.isBookmarked ? colors.primary : "#eaf5ff"};
  }
`;

export default BookmarkButton;
