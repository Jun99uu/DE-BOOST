import styled from "@emotion/styled";
import { AnalysisResult, ManufactureInfo } from "../../interface";
import { useEffect, useState } from "react";
import { AVERAGE } from "@/assets/AVERAGE";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { compareObjects } from "@/libs/reportMaker";
import { CaptionWrapper, ContentBd, ContentMid, flexStyle } from "../style";
import { getHigherTier } from "@/libs/getHigherTier";

interface Props {
  result: AnalysisResult;
}

interface CalculatedData {
  higher: Array<string>;
  regular: Array<string>;
  lower: Array<string>;
}

const CarryRatingCaptions = ({ result }: Props) => {
  const user = useRecoilValue(userNameState);
  const [report, setReport] = useState<CalculatedData>({
    higher: [],
    regular: [],
    lower: [],
  });

  const calculate = (data: ManufactureInfo) => {
    const myTierAverage = AVERAGE[user.tier][user.rank!]["all"];
    const newInfo = compareObjects(data, myTierAverage);

    setReport(newInfo);
  };

  useEffect(() => {
    calculate(result.manufactureInfo);
  }, [result, result.manufactureInfo]);

  const HigherSection = () => {
    return report.higher.length > 0 ? (
      <CaptionWrapper>
        <ContentMid>{`일반적인 ${user.tier} 소환사에 비해`}</ContentMid>
        <ContentMid>
          {report.higher.map((higher) => (
            <ContentBd key={higher}>{`${higher} `}</ContentBd>
          ))}
          <ContentMid>이(가) 높은 편입니다.</ContentMid>
        </ContentMid>
      </CaptionWrapper>
    ) : (
      <></>
    );
  };

  const RegularSection = () => {
    return report.regular.length > 0 ? (
      <CaptionWrapper>
        <ContentMid>{`일반적인 ${user.tier} 소환사와`}</ContentMid>
        <ContentMid>
          {report.higher.map((regular) => (
            <ContentBd key={regular}>{`${regular} `}</ContentBd>
          ))}
          <ContentMid>이(가) 유사합니다.</ContentMid>
        </ContentMid>
      </CaptionWrapper>
    ) : (
      <></>
    );
  };

  const LowerSection = () => {
    return report.lower.length > 0 ? (
      <CaptionWrapper>
        <ContentMid>{`일반적인 ${user.tier} 소환사에 비해`}</ContentMid>
        <ContentMid>
          {report.lower.map((lower) => (
            <ContentBd key={lower}>{`${lower} `}</ContentBd>
          ))}
          <ContentMid>이(가) 낮은 편입니다.</ContentMid>
        </ContentMid>
      </CaptionWrapper>
    ) : (
      <></>
    );
  };

  const AnalysisSection = () => {
    return (
      <CaptionWrapper>
        <ContentMid>종합적으로 평가했을 때,</ContentMid>
        <ContentBd>
          해당 소환사는 {getHigherTier(result.predictionList)[0].tier} 수준의
          지표를 보이고 있습니다.
        </ContentBd>
      </CaptionWrapper>
    );
  };

  return (
    <Container>
      <HigherSection />
      <RegularSection />
      <LowerSection />
      <AnalysisSection />
    </Container>
  );
};

const Container = styled.div`
  ${flexStyle};
  gap: 2rem;
`;

export default CarryRatingCaptions;
