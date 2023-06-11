import styled from "@emotion/styled";
import { ManufactureInfo } from "../../interface";
import Chart from "./Chart";
import Captions from "./Captions";
import { mq } from "@/styles/breakpoints";

interface Props {
  data: ManufactureInfo;
}

const Report = ({ data }: Props) => {
  return (
    <Container>
      <Chart data={data} />
      <Captions data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  ${mq[3]} {
    flex-direction: row;
    gap: 0px;
  }
`;

export default Report;
