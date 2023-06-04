import { colors } from "@/styles/tokens";
import styled from "@emotion/styled";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";

const ExtendButton = ({ ...props }: ComponentProps<"div">) => {
  return (
    <ButtonWrapper {...props}>
      <FontAwesomeIcon icon={faAnglesDown} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  transition: all 0.25s;
  font-size: 16px;
  color: ${colors.gray30};

  &:hover {
    color: ${colors.primary};
  }
`;
export default ExtendButton;
