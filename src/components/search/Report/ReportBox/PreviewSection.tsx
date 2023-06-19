import { boostingPercent } from "@/libs/boostingPercent";
import { AnalysisResult } from "../../interface";
import { useEffect, useState } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colors } from "@/styles/tokens";
import { ContentBd, ContentMid, PreviewWrapper } from "../style";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { STANDARD } from "@/libs/higherPercent";

interface Props {
  result: AnalysisResult;
}

interface AnalyzeType {
  percent: string;
  caption: string;
  color: SerializedStyles;
}

const defaultData: AnalyzeType = {
  percent: "",
  caption: "",
  color: css``,
};

const PreviewSection = ({ result }: Props) => {
  const user = useRecoilValue(userNameState);
  const [info, setInfo] = useState(defaultData);

  //최근 10게임 계산해서 세팅하는 함수
  const settingPercentage = () => {
    setInfo((prev) => {
      return { ...prev, percent: `${result.modelPrediction}` };
    });
    return result.modelPrediction;
  };

  // 분석 값에 대비하여 추가정보 저장하는 함수
  const analyzePercentage = (percent: number) => {
    let newInfo = { caption: "", color: css`` };
    if (percent >= STANDARD.highest)
      newInfo = {
        caption: "상당히 높은 편",
        color: css`
          color: ${colors.negative};
        `,
      };
    else if (percent >= STANDARD.higher)
      newInfo = {
        caption: "높은 편",
        color: css`
          color: ${colors.negative};
        `,
      };
    else if (percent >= STANDARD.regular)
      newInfo = {
        caption: "높지 않은 편",
        color: css`
          color: ${colors.primary};
        `,
      };
    else
      newInfo = {
        caption: "적은 편",
        color: css`
          color: ${colors.secondary};
        `,
      };

    setInfo((prev) => {
      return {
        ...prev,
        ...newInfo,
      };
    });
  };

  useEffect(() => {
    const boostPer = settingPercentage();
    analyzePercentage(boostPer);
  }, []);

  return (
    <PreviewWrapper>
      <ContentMid>
        {`${user.name} 소환사가 최근 10게임에서 대리 플레이(이하 부스팅)을 진행했을 확률은 `}
        <ContentBd css={info.color}>{`${Number(info.percent).toFixed(
          2
        )}%`}</ContentBd>
        {`로, ${info.caption}입니다.`}
      </ContentMid>
      <ContentMid>상기 내용에 대한 근거는 아래와 같습니다.</ContentMid>
    </PreviewWrapper>
  );
};

export default PreviewSection;
