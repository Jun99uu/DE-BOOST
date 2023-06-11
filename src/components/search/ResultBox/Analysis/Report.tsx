import styled from "@emotion/styled";
import { ManufactureInfo } from "../../interface";
import Chart from "./Chart";

interface Props {
  data: ManufactureInfo;
}

const Report = ({ data }: Props) => {
  return (
    <Container>
      <Chart data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Report;
