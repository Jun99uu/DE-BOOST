import { useEffect, useState } from "react";
import { Props } from "../Profile/interface";
import { AnalysisResult } from "../interface";
import { getAnalysis } from "@/libs/api/apis";
import { NotReported, ReportBox, Reporting } from "../Report";

const ReportSection = ({ data }: Props) => {
  const name = data.summonerInfo.summonerName;
  const [report, setReport] = useState<AnalysisResult | null>(null);

  const getReport = () => {
    getAnalysis(name)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getReport();
  }, []);

  /**---- 시연용 코드 ----*/
  const [staging, setStaging] = useState(false);
  const [success, setSuccess] = useState(false);

  const tmpRegister = () => {
    setStaging(true);
    setTimeout(() => {
      setStaging(false);
      setSuccess(true);
    }, 5000);
  };

  const ViewerSection = () => {
    if (report) {
      return staging ? (
        <Reporting />
      ) : success ? (
        <ReportBox result={report} />
      ) : (
        <NotReported name={name} tempRegister={tmpRegister} />
      );
    }
  };
  if (
    name === "은 채" ||
    name === "Hide on bush" ||
    name === "j suck h" ||
    name === "서폿을사랑해줘요" ||
    name === "hotfither"
  )
    return <ViewerSection />;

  /**--- 프로덕션 코드 ---*/
  if (report) return <ReportBox result={report} />;
  else return <NotReported name={name} />;
};

export default ReportSection;
