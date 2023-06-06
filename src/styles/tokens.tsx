import { css } from "@emotion/react";

export const typography = {
  title: {
    xl: {
      eb: css`
        font-size: 4rem;
        font-weight: 800;
      `,
      sb: css`
        font-size: 4rem;
        font-weight: 600;
      `,
    },
    lg: {
      bd: css`
        font-size: 3.6rem;
        font-weight: 700;
      `,
      sb: css`
        font-size: 3.6rem;
        font-weight: 600;
      `,
    },
  },
  subtitle: {
    xl: {
      bd: css`
        font-size: 2.4rem;
        font-weight: 700;
      `,
      sb: css`
        font-size: 2.4rem;
        font-weight: 600;
      `,
    },
    lg: {
      eb: css`
        font-size: 2rem;
        font-weight: 800;
      `,
      bd: css`
        font-size: 2rem;
        font-weight: 700;
      `,
      sb: css`
        font-size: 2rem;
        font-weight: 600;
      `,
    },
  },
  content: {
    lg: {
      sb: css`
        font-size: 1.6rem;
        font-weight: 600;
      `,
      md: css`
        font-size: 1.6rem;
        font-weight: 500;
      `,
      reg: css`
        font-size: 1.6rem;
        font-weight: 400;
      `,
    },
    md1: {
      sb: css`
        font-size: 1.5rem;
        font-weight: 600;
      `,
      md: css`
        font-size: 1.5rem;
        font-weight: 500;
      `,
      reg: css`
        font-size: 1.5rem;
        font-weight: 400;
      `,
    },
    md2: {
      eb: css`
        font-size: 1.4rem;
        font-weight: 800;
      `,
      sb: css`
        font-size: 1.4rem;
        font-weight: 600;
      `,
      md: css`
        font-size: 1.4rem;
        font-weight: 500;
      `,
      reg: css`
        font-size: 1.4rem;
        font-weight: 400;
      `,
    },
  },
  caption: {
    lg: {
      sb: css`
        font-size: 1.2rem;
        font-weight: 600;
      `,
      md: css`
        font-size: 1.2rem;
        font-weight: 500;
      `,
      reg: css`
        font-size: 1.2rem;
        font-weight: 400;
      `,
    },
    md1: {
      sb: css`
        font-size: 1rem;
        font-weight: 600;
      `,
      md: css`
        font-size: 1rem;
        font-weight: 500;
      `,
      reg: css`
        font-size: 1rem;
        font-weight: 400;
      `,
    },
  },
};

export const colors = {
  white: "#f2f4f6",
  darkest: "#121212",
  black: "#181818",
  gray: "#4B4B4B",
  gray10: "#6D6D6D",
  gray20: "#A3A3A3",
  gray30: "#C4C4C4",
  light: "#EAEAEA",
  lightest: "#DCE0EA",
  primary: "#2192FF",
  primary10: "#F6FBFF",
  secondary: "#48C232",
  negative: "#E72C2C",
  negative10: "#FFF6F6",
};
