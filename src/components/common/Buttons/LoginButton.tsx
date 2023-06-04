import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";

const LoginButton = ({ ...props }: React.ComponentProps<"button">) => {
  return <ButtonWrapper {...props}>로그인</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 13px;
  white-space: nowrap;
  ${typography.caption.lg.sb};
  color: ${colors.gray};
`;

export default LoginButton;
