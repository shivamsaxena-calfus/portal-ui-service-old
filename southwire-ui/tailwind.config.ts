import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "login-page-overview-bg": "#232930CC",
      primary: {
        main: "#0070D2",
        inverse: "#FFFFFF",
        strong: "#305790",
        light: "#E7F3FE",
        blue: "#adcff1",
        dark: "#1D284C", 
      },
      base: {
        primary: "#232930",
        secondary: "#66727A",
        tertiary: "#DFE3E6",
      },
      background: {
        medium: "#EFF1F3",
        strong: "#DFE3E6",
        low: "#FFFFFF",
        weak: "#F9FAFB",
      },
      stroke: {
        medium: "#DFE3E6",
        strong: "#CED1D3",
        weak: "#EFF1F3",
      },
      alert: {
        positive: {
          main: "#36B984",
        },
        negative: {
          main: "#DF5656",
          secondary: "#FFE7E399",
        },
        neutral: {
          main: "#F19100",
        },
      },
      gray: {
        gray: "#5A5B6A",
        light: "#c1c0c0",
      },
      card: {
        shadow: "#E2E5E84D",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cardsBgColor: "#f9fafb",
        "background-low": "#FFF",
        "stroke-medium": "#DFE3E6",
      },
      spacing: {
        xs: "8px",
        s: "12px",
      },
      animation: {
        "spin-rev": "spin 1s linear infinite reverse",
      },
      overflow: {
        "x-hidden": "overflow-x: hidden", 
      },
    },
  },
  plugins: [],
};

export default config;
