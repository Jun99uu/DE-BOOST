import styled from "@emotion/styled";
import { Props } from "../Profile/interface";
import RecordBox from "../RecordBox";

/** 실제로 전적이 보여지는 섹션 */
const RecordSection = ({ data }: Props) => {
  return (
    <Container>
      {data.gameInfos.map((match) => (
        <RecordBox match={match} key={match.gameId} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.2rem;
`;

export default RecordSection;
