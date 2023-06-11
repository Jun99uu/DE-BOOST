import { userNameState } from "@/store/usernameAtom";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";
import { useRecoilValue } from "recoil";

const Percentage = ({ ...props }: ComponentProps<"span">) => {
  const user = useRecoilValue(userNameState);

  return (
    <Wrapper>
      <Content>{`현재 매치에서 ${user.name} 소환사가 대리 플레이어일 확률`}</Content>
      <Link {...props}>
        소환사 전적 분석하기 <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Content = styled.span`
  ${typography.content.md2.md};
  color: ${colors.darkest};
  text-align: center;
`;

const Link = styled.span`
  cursor: pointer;
  ${typography.content.lg.sb};
  color: ${colors.negative};
  padding-bottom: 2.5px;
  border-bottom: 1px solid ${colors.negative};
`;

export default Percentage;
