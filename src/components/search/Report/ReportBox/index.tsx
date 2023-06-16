import { Container, Horizon, ReportContainer } from "../style";
import CarryRatingSection from "./CarryRatingSection";
import PreviewSection from "./PreviewSection";
import { dummy } from "./dummy";

/** 종합 분석 보고서 */
const ReportBox = () => {
  const COMPONENTS = [CarryRatingSection];

  return (
    <Container>
      <PreviewSection result={dummy} />
      <Horizon />
      <ReportContainer>
        {COMPONENTS.map((Component) => (
          <Component result={dummy} />
        ))}
      </ReportContainer>
    </Container>
  );
};

export default ReportBox;
