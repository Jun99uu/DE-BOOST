import { Container } from "../style";
import PreviewSection from "./PreviewSection";
import { dummy } from "./dummy";

/** 종합 분석 보고서 */
const ReportBox = () => {
  return (
    <Container>
      <PreviewSection result={dummy} />
    </Container>
  );
};

export default ReportBox;
