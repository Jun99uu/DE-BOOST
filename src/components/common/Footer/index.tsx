import Logo from "@/assets/Logo";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";

const Footer = () => {
  const contents = [
    "DE:BOOST | 서울특별시 동작구 사당로 50 숭실대학교 그 어딘가",
    "특허번호 : 제2022-서울동작-1234 | Contact : DE:BOOST@email.com",
    "Copyright by DE:BOOST. All right reserved.",
  ];
  return (
    <Container>
      <Logo blue={true} />
      {contents.map((content) => (
        <Content key={content}>{content}</Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 100px 50px 50px 50px;
`;

const Content = styled.span`
  ${typography.content.md2.reg};
  color: ${colors.gray20};
  text-align: start;
`;

export default Footer;
