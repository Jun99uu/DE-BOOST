import { boostingPercent } from "@/libs/boostingPercent";
import { AnalysisResult } from "../../interface";
import { Button, Caption, DownLoadWrapper } from "../style";
import { useEffect, useState } from "react";
import { STANDARD } from "@/libs/higherPercent";
import { css } from "@emotion/react";
import { colors } from "@/styles/tokens";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  result: AnalysisResult;
  printReport: () => void;
}

/** 신고 자료 pdf 다운로드 섹션 */
const PdfDownloader = ({ result, printReport }: Props) => {
  const [contents, setContents] = useState<Array<string>>([]);

  const settingContents = () => {
    const percentage = boostingPercent(result.predictionList);
    let newContents = [];
    if (Number(percentage) > STANDARD.higher)
      newContents = [
        `해당 소환사는 부스팅 플레이어일 확률이 ${STANDARD.higher}% 이상입니다.\n건전하고 즐거운 게임 플레이를 위해 신고자료를 활용하여 `,
        `이곳`,
        `에서 신고를 진행해보세요!`,
      ];
    else
      newContents = [
        `해당 소환사는 부스팅 플에이어일 확률이 ${STANDARD.higher}% 이하입니다.\n하지만 대리 플레이어로 의심된다면 `,
        `이곳`,
        `에서 신고를 진행해보세요!`,
      ];

    setContents(newContents);
  };

  const openRiotReportSite = () => {
    window.open(
      "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360034625773-Report-a-Player-After-a-Game",
      "_blank"
    );
  };

  useEffect(() => {
    settingContents();
  }, []);

  return (
    <DownLoadWrapper>
      <Caption
        css={css`
          text-align: center;
          color: ${colors.gray};
        `}
      >
        {contents[0]}
        <Anchor onClick={openRiotReportSite}>{contents[1]}</Anchor>
        {contents[2]}
      </Caption>
      <Button onClick={printReport}>
        신고 자료 PDF 다운로드
        <FontAwesomeIcon icon={faCloudArrowDown} />
      </Button>
    </DownLoadWrapper>
  );
};

const Anchor = styled.span`
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  padding-bottom: 1.5px;
  border-bottom: 1px solid ${colors.gray};
`;

export default PdfDownloader;
