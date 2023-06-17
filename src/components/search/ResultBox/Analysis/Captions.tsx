import { userNameState } from "@/store/usernameAtom";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { ManufactureInfo } from "../../interface";
import { useEffect, useState } from "react";
import { AVERAGE } from "@/assets/AVERAGE";
import { compareObjects } from "@/libs/reportMaker";
import { colors, typography } from "@/styles/tokens";
import { css } from "@emotion/react";
import { mq } from "@/styles/breakpoints";

interface Props {
  data: ManufactureInfo;
}

interface CalculatedData {
  higher: Array<string>;
  regular: Array<string>;
  lower: Array<string>;
}

const Captions = ({ data }: Props) => {
  const user = useRecoilValue(userNameState);
  const [report, setReport] = useState<CalculatedData>({
    higher: [],
    regular: [],
    lower: [],
  });

  const calculate = (data: ManufactureInfo) => {
    const myTierAverage = AVERAGE[user.tier][user.rank]["all"];
    const newInfo = compareObjects(data, myTierAverage);

    setReport(newInfo);
  };

  useEffect(() => {
    calculate(data);
  }, [data]);

  return (
    <Container>
      <Wrapper>
        {report.higher.length > 0 ? (
          <>
            <Content>
              평균{" "}
              <Content
                css={css`
                  color: ${colors.primary};
                `}
              >
                {user.tier}
              </Content>
              보다 높아요.
            </Content>
            <CaptionWrapper>
              {report.higher.map((re) => (
                <Caption bg={colors.primary}>{re.toUpperCase()}</Caption>
              ))}
            </CaptionWrapper>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
      <Wrapper>
        {report.regular.length > 0 ? (
          <>
            <Content>
              평균{" "}
              <Content
                css={css`
                  color: #48c232;
                `}
              >
                {user.tier}
              </Content>
              과 유사해요.
            </Content>
            <CaptionWrapper>
              {report.regular.map((re) => (
                <Caption bg={"#48c232"}>{re.toUpperCase()}</Caption>
              ))}
            </CaptionWrapper>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
      <Wrapper>
        {report.lower.length > 0 ? (
          <>
            <Content>
              평균{" "}
              <Content
                css={css`
                  color: #6e1ad2;
                `}
              >
                {user.tier}
              </Content>
              보다 낮아요.
            </Content>
            <CaptionWrapper>
              {report.lower.map((re) => (
                <Caption bg={"#6e1ad2"}>{re.toUpperCase()}</Caption>
              ))}
            </CaptionWrapper>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  ${mq[3]} {
    width: 40%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

const Content = styled.span`
  ${typography.content.lg.sb};
  color: ${colors.black};
  text-align: start;
`;

const CaptionWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Caption = styled.span<{ bg: string }>`
  ${typography.content.md2.eb};
  color: ${colors.white};
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
`;

export default Captions;
