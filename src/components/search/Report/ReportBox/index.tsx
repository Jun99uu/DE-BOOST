import { Container, Horizon, ReportContainer } from "../style";
import CarryRatingSection from "./CarryRatingSection";
import PreviewSection from "./PreviewSection";
import TrendSection from "./TrendSection";
import { dummy } from "./dummy";

/** 종합 분석 보고서 */
const ReportBox = () => {
  const COMPONENTS = [CarryRatingSection, TrendSection];

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
