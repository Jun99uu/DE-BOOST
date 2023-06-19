import { ApexOptions } from "apexcharts";
import {
  CaptionWrapper,
  ContentBd,
  ContentMid,
  Title,
  TitleBox,
} from "../style";
import { AnalysisResult } from "../../interface";
import ReactApexChart from "react-apexcharts";
import { TIERS, getHigherTier } from "@/libs/getHigherTier";
import { css } from "@emotion/react";
import { colors } from "@/styles/tokens";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { convertToRomanNumber } from "@/libs/toRome";

interface Props {
  result: AnalysisResult;
}

/** 추이 그래프 섹션 */
const RadialSection = ({ result }: Props) => {
  const user = useRecoilValue(userNameState);
  const analysis = getHigherTier(result.predictionList);
  const option: ApexOptions = {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      show: false,
    },
    labels: TIERS,
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = result.predictionList;

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
          <ContentMid>
            현재 소환사의 티어는{" "}
            <ContentBd>
              {user.tier}
              {convertToRomanNumber(user.rank)}입니다.
            </ContentBd>
          </ContentMid>
          <ContentMid>
            하지만 소환사의 매치를 분석하여 유추할 수 있는 실제 티어는{" "}
            <ContentBd>{analysis[0].tier}이며,</ContentBd>
          </ContentMid>
          <ContentMid>
            해당 소환사가 부스팅 플레이어일 확률은{" "}
            <ContentBd
              css={css`
                color: ${colors.negative};
              `}
            >
              {result.modelPrediction.toFixed(2)}%
            </ContentBd>
            인 것을 알 수 있습니다.
          </ContentMid>
          <ContentMid>
            해당 확률은 AI Transformer Model을 기반으로, 캐리 레이팅 및 인게임
            지표를 분석하여 도출한 수치입니다.
          </ContentMid>
        </ContentMid>
      </CaptionWrapper>
    );
  };

  return (
    <TitleBox>
      <Title>소환사 티어 매칭 분석</Title>
      <ReactApexChart
        options={option}
        series={series}
        type="polarArea"
        height={350}
        style={{ width: "100%" }}
      />
      <AnalysisResult />
    </TitleBox>
  );
};

export default RadialSection;
