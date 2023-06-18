import styled from "@emotion/styled";
import { Props } from "./interface";
import Icon from "./Icon";
import Info from "./Info";
import { mq } from "@/styles/breakpoints";

interface ProfileProps extends Props {
  update: () => void;
}

/** 프로필 컴포넌트 */
const Profile = ({ data, update }: ProfileProps) => {
  return (
    <Container>
      <Icon data={data} />
      <Info data={data} update={update} />
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
