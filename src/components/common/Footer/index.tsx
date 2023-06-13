import Logo from "@/assets/Logo";
import useMobile from "@/hooks/useMobile";
import { colors, typography } from "@/styles/tokens";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const isMobile = useMobile();
  const contents = [
    "DE:BOOST | 서울특별시 동작구 사당로 50 숭실대학교 그 어딘가",
    "특허번호 : 제2022-서울동작-1234 | Contact : DE:BOOST@email.com",
    "Copyright by DE:BOOST. All right reserved.",
  ];

  return (
    <Container none={pathname === "/login"} isMobile={isMobile}>
      <Logo blue={true} />
      {contents.map((content) => (
        <Content key={content}>{content}</Content>
      ))}
    </Container>
  );
};

const Container = styled.div<{ none: boolean; isMobile: boolean }>`
  width: 100%;
  display: ${(props) => (props.none ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  z-index: 2;
  padding: ${(props) =>
    props.isMobile ? "150px 3rem 5rem 3rem" : "150px 50px 50px 50px"};
`;

const Content = styled.span`
  ${typography.content.md2.reg};
  color: ${colors.gray20};
  text-align: start;
`;

export default Footer;
