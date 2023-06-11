import { colors } from "@/styles/tokens";
import { css, keyframes } from "@emotion/react";

const CircleSquare = ({ ...props }) => {
  const squareAnimation = keyframes`
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(-20px) translateY(-10px) rotate(-180deg);
      border-radius: 50%;
      background: #3498db;
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
  `;

  const preloader2Animation = keyframes`
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(24px) translateY(-24px) rotate(180deg);
      border-radius: 50%;
      background: #f1c40f;
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
  `;

  const preloader3Animation = keyframes`
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(-18px) translateY(10px) rotate(-180deg);
      border-radius: 50%;
      background: #2ecc71;
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(-360deg);
      border-radius: 0px;
    }
  `;

  const preloader4Animation = keyframes`
    0% {
      transform: translateX(0px) translateY(0px) rotate(0deg);
      border-radius: 0px;
    }
    50% {
      transform: translateX(18px) translateY(10px) rotate(180deg);
      border-radius: 50%;
      background: #e74c3c;
    }
    80% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
    100% {
      transform: translateX(0px) translateY(0px) rotate(360deg);
      border-radius: 0px;
    }
  `;

  const containerStyles = css`
    margin: -25px 0 0 -25px;
  `;

  const spanStyles = css`
    width: 16px;
    height: 16px;
    background-color: ${colors.primary};
    display: inline-block;
    animation: ${squareAnimation} 2s infinite ease-in-out both;
  `;

  const preloader2Styles = css`
    left: 20px;
    animation: ${preloader2Animation} 1.5s infinite ease-in-out;
  `;

  const preloader3Styles = css`
    top: 0px;
    animation: ${preloader3Animation} 1.5s infinite ease-in-out;
  `;

  const preloader4Styles = css`
    top: 0px;
    left: 20px;
    animation: ${preloader4Animation} 1.5s infinite ease-in-out;
  `;

  return (
    <div id="circle_square" css={containerStyles} {...props}>
      <span css={[spanStyles, preloader2Styles]}></span>
      <span css={[spanStyles, preloader3Styles]}></span>
      <span css={[spanStyles, preloader4Styles]}></span>
    </div>
  );
};

export default CircleSquare;
