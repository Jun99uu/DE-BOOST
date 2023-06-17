import { useRef } from "react";
import { Container, Horizon, ReportContainer } from "../style";
import CarryRatingSection from "./CarryRatingSection";
import GeneralSection from "./GeneralSection";
import PdfDownloader from "./PdfDownlader";
import PreviewSection from "./PreviewSection";
import TrendSection from "./TrendSection";
import { dummy } from "./dummy";
import { useReactToPrint } from "react-to-print";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";

/** 종합 분석 보고서 */
const ReportBox = () => {
  const user = useRecoilValue(userNameState);
  const componentRef = useRef(null);
  const COMPONENTS = [CarryRatingSection, TrendSection, GeneralSection];

  const printReport = () => {
    handlePrint();
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `LeagueofLegends_${user.name}_boost_report`,
  });

  return (
    <Container>
      <Container ref={componentRef}>
        <PreviewSection result={dummy} />
        <Horizon />
        <ReportContainer>
          {COMPONENTS.map((Component) => (
            <Component result={dummy} />
          ))}
        </ReportContainer>
      </Container>
      <PdfDownloader result={dummy} printReport={printReport} />
    </Container>
  );
};

export default ReportBox;
