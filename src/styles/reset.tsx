import { css } from "@emotion/react";
import { mq } from "./breakpoints";

const reset = css`
  html,
  body {
    padding: 0px;
    margin: 0px;
    font-family: "SUIT Variable", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f4f6;
    font-size: 8px;

    ${mq[2]} {
      font-size: 9px;
    }
    ${mq[4]} {
      font-size: 10px;
    }
    ${mq[6]} {
      font-size: 11px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default reset;
