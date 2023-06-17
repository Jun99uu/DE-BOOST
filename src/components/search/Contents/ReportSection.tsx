import { useEffect, useState } from "react";
import { Props } from "../Profile/interface";
import { AnalysisResult } from "../interface";
import { getAnalysis } from "@/libs/api/apis";
import { NotReported, ReportBox } from "../Report";

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

  if (report) return <ReportBox result={report} />;
  else return <NotReported name={name} />;
};

export default ReportSection;
