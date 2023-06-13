import { colors } from "@/styles/tokens";
import { css, SerializedStyles } from "@emotion/react";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  percent: number;
}

const Progress = ({ percent, ...props }: Props) => {
  return (
    <div css={style.box} {...props}>
      <div css={style.percent}>
        <svg css={style.svg}>
          <circle
            css={[style.circle, style.firstChildCircle]}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            css={[style.circle, style.secondChildCircle(percent)]}
            cx="70"
            cy="70"
            r="70"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

const style = {
  box: css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    transition: transform 0.2s;
  `,
  percent: css`
    width: 150px;
    height: 150px;
    position: relative;
  `,
  svg: css`
    width: 150px;
    height: 150px;
    position: relative;
  `,
  circle: css`
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 10;
    stroke: #000;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  `,
  firstChildCircle: css`
    stroke-dashoffset: 0;
    stroke: ${colors.light};
  `,
  secondChildCircle: (percent: number): SerializedStyles => css`
    stroke-dashoffset: calc(440 - (440 * ${percent}) / 100);
    stroke: #03a9f4;
    transition: all 1s ease-in-out;
  `,
  num: css`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #111;
  `,
  h2: css`
    font-size: 48px;
  `,
  span: css`
    font-size: 24px;
  `,
  text: css`
    padding: 10px 0 0;
    color: #999;
    font-weight: 700;
    letter-spacing: 1px;
  `,
};

export default Progress;
