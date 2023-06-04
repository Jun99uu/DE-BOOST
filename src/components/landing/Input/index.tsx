import styled from "@emotion/styled";
import Nation from "./Nation";
import Magnifying from "./Magnifying";
import { colors, typography } from "@/styles/tokens";

/**
 * 검색 박스 wrapper
 */
const SearchInput = () => {
  return (
    <InputWrapper>
      <Nation />
      <CustomInput placeholder="소환사 이름을 입력해주세요." />
      <Magnifying />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 500px;
  overflow: hidden;
  padding: 10px;
`;

const CustomInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  height: 100%;
  ${typography.content.md1.md};
  color: ${colors.black};
  padding: 15px;

  &::placeholder {
    color: ${colors.gray20};
  }
`;

export default SearchInput;
