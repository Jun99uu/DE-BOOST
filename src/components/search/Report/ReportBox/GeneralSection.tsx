import { css } from "@emotion/react";
import { AnalysisResult } from "../../interface";
import { ContentMid, Title, TitleBox } from "../style";
import { boostingPercent } from "@/libs/boostingPercent";
import { ANALYSIS } from "@/assets/ANALYSIS";
import { STANDARD } from "@/libs/higherPercent";

interface Props {
  result: AnalysisResult;
}

/** 전체 분석 섹션 */
const GeneralSection = ({ result }: Props) => {
  const percentage = Number(boostingPercent(result.predictionList));

  const getAnalysis = () => {
    if (percentage > STANDARD.highest) return ANALYSIS.highest;
    if (percentage > STANDARD.higher) return ANALYSIS.higher;
    if (percentage > STANDARD.regular) return ANALYSIS.regular;
    else return ANALYSIS.lower;
  };

  return (
    <TitleBox>
      <Title>전체 분석</Title>
      <ContentMid
        css={css`
          line-height: 2.8rem;
        `}
      >
        {getAnalysis()}
      </ContentMid>
    </TitleBox>
  );
};

export default GeneralSection;
