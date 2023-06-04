import Logo from "@/assets/Logo";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import lol from "@assets/lol.png";
import { useNavigate } from "react-router-dom";

/**
 * 헤더에서 가장 왼쪽 타이틀 부분
 */
const Title = () => {
  const navigate = useNavigate();
  return (
    <TitleList onClick={() => navigate("/")}>
      <Logo width={102} height={17} fill={colors.white} />
      <Typo>for</Typo>
      <LolLogo src={lol} alt="lol-logo" />
    </TitleList>
  );
};

const TitleList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  cursor: pointer;
`;

const Typo = styled.span`
  ${typography.content.md2.eb};
  color: ${colors.white};
  margin-left: -7px;
`;

const LolLogo = styled.img`
  width: auto;
  height: 17px;
`;

export default Title;
