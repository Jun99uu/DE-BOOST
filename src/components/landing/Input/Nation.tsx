import useMobile from "@/hooks/useMobile";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Nation = () => {
  const isMobile = useMobile();
  const [size, setSize] = useState(65);

  useEffect(() => {
    setSize(isMobile ? 50 : 65);
  }, [isMobile]);

  return (
    <NationWrapper
      css={css`
        width: ${size}px;
      `}
    >
      KR
    </NationWrapper>
  );
};

const NationWrapper = styled.span`
  ${typography.subtitle.lg.bd};
  color: ${colors.primary};
  height: 100%;
  border-right: 1.5px solid ${colors.light};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export default Nation;
