import useMobile from "@/hooks/useMobile";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Magnifying = ({ ...props }: React.ComponentProps<"button">) => {
  const isMobile = useMobile();
  const [size, setSize] = useState(65);

  useEffect(() => {
    setSize(isMobile ? 50 : 65);
  }, [isMobile]);

  return (
    <ButtonWrapper
      css={css`
        width: ${size}px;
      `}
    >
      <MagnifyingButton {...props}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </MagnifyingButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const MagnifyingButton = styled.button`
  padding: 13px;
  border: none;
  outline: none;
  background: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.content.lg.sb};
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: #eff8ff;
  }

  &:active {
    background-color: #dff0ff;
  }
`;

export default Magnifying;
