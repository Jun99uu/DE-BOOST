import { mq } from "@/styles/breakpoints";
import { colors, typography } from "@/styles/tokens";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { GameInfo } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  match: GameInfo;
}

interface StyleProps {
  vertical: SerializedStyles;
  bg: SerializedStyles;
}

/** 검색 결과 -> 하나의 매치 전적 프리뷰 박스 */
const RecordBox = ({ match }: Props) => {
  const [style, setStyle] = useState<StyleProps>(winStyle);
  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState<SerializedStyles>(downStyle);

  /** 매치 데이터 내부 승패 여부 확인 후 세로선 스타일링 */
  const settingVerticalStyle = () => {
    if (match.info.gameData.win) setStyle(winStyle);
    else setStyle(loseStyle);
  };

  const openResult = () => {
    setOpen((prev) => !prev);
    if (open) setAngle(upStyle);
    else setAngle(downStyle);
  };

  useEffect(() => {
    settingVerticalStyle();
  }, []);

  return (
    <Container onClick={openResult} css={style.bg}>
      <Vertical css={[style.vertical, leftStyle]} />
      <Vertical css={[style.vertical, rightStyle]}>
        <AngleButton css={angle}>
          <FontAwesomeIcon icon={faAngleDown} />
        </AngleButton>
      </Vertical>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 13rem;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.2rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;

  ${mq[3]} {
    padding: 4rem 2rem;
  }
`;

const Vertical = styled.div`
  width: 1rem;
  height: 100%;
  position: absolute;
`;

const winVertical = css`
  background-color: ${colors.primary};
`;

const winBg = css`
  background-color: ${colors.primary10};
`;

const loseVertical = css`
  background-color: ${colors.negative};
`;

const loseBg = css`
  background-color: ${colors.negative10};
`;

// 승패 여부에 따라 다르게 적용되는 스타일링들
const winStyle: StyleProps = {
  vertical: winVertical,
  bg: winBg,
};
const loseStyle: StyleProps = {
  vertical: loseVertical,
  bg: loseBg,
};

const leftStyle = css`
  top: 0px;
  left: 0px;
`;

const rightStyle = css`
  width: 2rem;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const AngleButton = styled.span`
  ${typography.caption.lg.sb};
  color: ${colors.white};
  transition: all 0.5s;
  margin-bottom: 0.3rem;
`;

const upStyle = css`
  transform: rotate(-180deg);
`;

const downStyle = css`
  transform: rotate(0deg);
`;

export default RecordBox;
