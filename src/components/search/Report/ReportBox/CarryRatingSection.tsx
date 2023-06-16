import Chart from "../../ResultBox/Analysis/Chart";
import { AnalysisResult } from "../../interface";
import { RowWrapper, Title, TitleBox } from "../style";
import CarryRatingCaptions from "./CarryRatingCaptions";

interface Props {
  result: AnalysisResult;
}

/** 캐리 레이팅 정보가 들어가는 섹션 */
const CarryRatingSection = ({ result }: Props) => {
  return (
    <TitleBox>
      <Title>최근 10 게임에서 평균 캐리 레이팅</Title>
      <RowWrapper>
        <Chart data={result.manufactureInfo} />
        <CarryRatingCaptions result={result} />
      </RowWrapper>
    </TitleBox>
  );
};

export default CarryRatingSection;
