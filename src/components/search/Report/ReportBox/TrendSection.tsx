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

interface Props {
  result: AnalysisResult;
}

/** 추이 그래프 섹션 */
const TrendSection = ({ result }: Props) => {
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
        text: "부스팅 확률",
      },
      labels: {
        show: false, // This will hide the y-axis labels
      },
    },
    xaxis: {
      type: "category",
    },
  };

  const series = [
    {
      name: "XYZ MOTORS",
      data: result.predictionList,
    },
  ];

  const AnalysisResult = () => {
    return (
      <CaptionWrapper>
        <ContentMid>
          10 게임 중,{" "}
          <ContentBd>
            {higherPercent(result.predictionList)} 게임 에서
          </ContentBd>{" "}
          75% 이상의 확률을 보이고 있습니다.
        </ContentMid>
        <ContentMid>
          해당 확률은 AI Transformer Model을 기반으로, 캐리 레이팅 지표를
          분석하여 도출한 수치입니다.
        </ContentMid>
      </CaptionWrapper>
    );
  };

  return (
    <TitleBox>
      <Title>최근 10게임에서의 부스팅 확률 추이</Title>
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
