import Magnifying from "@/components/landing/Input/Magnifying";
import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEnter = () => {
    navigate(`/search/${value}`);
  };

  const onKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onEnter();
  };

  return (
    <InputWrapper>
      <Input
        placeholder="소환사 이름을 입력해주세요."
        value={value}
        onChange={changeValue}
        onKeyDown={onKeyEnter}
      />
      <Magnifying
        settingWidth={22}
        onClick={onEnter}
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
