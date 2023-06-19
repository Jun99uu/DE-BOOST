import { ApexOptions } from "apexcharts";
import {
  CaptionWrapper,
  ContentBd,
  ContentMid,
  ContentsWrapper,
  Title,
  TitleBox,
} from "../style";
import { AnalysisResult } from "../../interface";
import ReactApexChart from "react-apexcharts";
import { higherPercent } from "@/libs/higherPercent";
import { TIERS, getHigherTier } from "@/libs/getHigherTier";
import { css } from "@emotion/react";
import { colors } from "@/styles/tokens";

interface Props {
  result: AnalysisResult;
}

/** 추이 그래프 섹션 */
const TrendSection = ({ result }: Props) => {
  const analysis = getHigherTier(result.predictionList);
  const option: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
        tools: {
          download: false,
          selection: false,
          pan: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        text: "해당 티어일 확률",
      },
      labels: {
        show: true, // This will hide the y-axis labels
      },
    },
    xaxis: {
      type: "category",
      categories: TIERS,
    },
  };

  const series = [
    {
      name: "Boosting probability",
      data: result.predictionList,
    },
  ];

  const AnalysisResult = () => {
    return (
      <CaptionWrapper>
        <ContentMid
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          `}
        >
          해당 소환사의 최근 10개의 매치를 분석했을 때,
          {analysis.map((a, idx) => (
            <>
              <ContentBd>
                {a.tier}에서 {a.prediction}%의 확률을
                {idx === 2 ? (
                  <ContentMid>{` 보이고 있습니다.`}</ContentMid>
                ) : (
                  <></>
                )}
              </ContentBd>
            </>
          ))}
          <ContentMid>
            결론적으로, 해당 소환사의 매치를 바탕으로 유추할 수 있는 소환사의
            티어는 <ContentBd>{analysis[0].tier}이며,</ContentBd>
          </ContentMid>
          <ContentMid>
            현재 티어에 소속되지 않을 확률은{" "}
            <ContentBd
              css={css`
                color: ${colors.negative};
              `}
            >
              {result.modelPrediction}%
            </ContentBd>
            인 것을 알 수 있습니다.
          </ContentMid>
          <ContentMid>
            해당 확률은 AI Transformer Model을 기반으로, 캐리 레이팅 지표를
            분석하여 도출한 수치입니다.
          </ContentMid>
        </ContentMid>
      </CaptionWrapper>
    );
  };

  return (
    <TitleBox>
      <Title>매치 분석 기반 실제 티어</Title>
      <ReactApexChart
        options={option}
        series={series}
        type="area"
        height={350}
        style={{ width: "100%" }}
      />
      <AnalysisResult />
    </TitleBox>
  );
};

export default TrendSection;
