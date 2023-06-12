import Magnifying from "@/components/landing/Input/Magnifying";
import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SearchInput = () => {
  return (
    <InputWrapper>
      <Input placeholder="소환사 이름을 입력해주세요." />
      <Magnifying
        settingWidth={22}
        css={css`
          width: 10px;
          height: 10px;
        `}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  background-color: ${colors.white};
  width: 70%;
  height: 4rem;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;

  ${mq[3]} {
    max-width: 35.3rem;
    width: 40%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  height: 100%;

  ${typography.content.lg.md};
  color: ${colors.darkest};

  &::placeholder {
    ${typography.content.lg.md};
    color: ${colors.gray20};
  }
`;

export default SearchInput;
