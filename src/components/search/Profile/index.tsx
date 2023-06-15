import styled from "@emotion/styled";
import { Props } from "./interface";
import Icon from "./Icon";
import Info from "./Info";
import { mq } from "@/styles/breakpoints";

/** 프로필 컴포넌트 */
const Profile = ({ data }: Props) => {
  return (
    <Container>
      <Icon data={data} />
      <Info data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0rem 1rem;

  ${mq[3]} {
    gap: 2rem;
  }
`;

export default Profile;
