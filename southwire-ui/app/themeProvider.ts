"use client";
import { createTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading4XL: React.CSSProperties;
    headingXXL: React.CSSProperties;
    heading3XL: React.CSSProperties;
    heading2xl: React.CSSProperties;
    headingxl: React.CSSProperties;
    headinglg: React.CSSProperties;
    headingMD: React.CSSProperties;
    headingSM:React.CSSProperties;
    paragraphMD: React.CSSProperties;
    paragraphsm: React.CSSProperties;
    textDefault: React.CSSProperties;
    textMD: React.CSSProperties;
    textSM: React.CSSProperties;
    paragraphDefault: React.CSSProperties;
    textXSM: React.CSSProperties;
    textLG: React.CSSProperties;
    headingDefault: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    heading4XL: React.CSSProperties;
    headingXXL?: React.CSSProperties;
    heading3XL?: React.CSSProperties;
    heading2xl?: React.CSSProperties;
    headingxl: React.CSSProperties;
    headinglg: React.CSSProperties;
    headingMD: React.CSSProperties;
    headingSM: React.CSSProperties;
    paragraphMD: React.CSSProperties;
    paragraphsm: React.CSSProperties;
    textDefault: React.CSSProperties;
    textMD: React.CSSProperties;
    textSM: React.CSSProperties;
    paragraphDefault: React.CSSProperties;
    textXSM: React.CSSProperties;
    textLG: React.CSSProperties;
    headingDefault: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading4XL: true;
    headingXXL: true;
    heading3XL: true;
    heading2xl: true;
    headingxl: true;
    headinglg: true;
    headingSM:true;
    headingMD: true;
    paragraphMD: true;
    paragraphsm: true;
    textDefault: true;
    textMD: true;
    textSM: true;
    paragraphDefault: true;
    textXSM: true;
    textLG: true;
    headingDefault: true;
  }
}

export const theme = createTheme({
  typography: {
    heading4XL: {
      fontSize: "40px",
      fontWeight: 900,
      fontStyle: "normal",
      lineHeight: "160%" /* 42px */,
    },
    headingXXL: {
      fontSize: "36px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "150%" /* 42px */,
    },
    heading3XL: {
      fontSize: "30px",
      fontWeight: 900,
      fontStyle: "normal",
      lineHeight: "140%" /* 42px */,
    },
    heading2xl: {
      fontSize: "30px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "140%" /* 42px */,
    },
    headingxl: {
      fontSize: "20px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "130%" /* 26px */,
    },
    headinglg: {
      fontSize: "18px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "130%" /* 26px */,
    },
    headingSM: {
      fontSize: "24px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "145%" /* 33px */,
    },
    headingMD: {
      fontSize: "24px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "145%" /* 33px */,
    },
    paragraphMD: {
      fontSize: "16px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "140%" /* 19.6px */,
    },
    paragraphsm: {
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "140%" /* 19.6px */,
    },
    textDefault: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "130%",
    },
    textMD: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "130%",
    },
    textSM: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "130%",
    },
    textXSM: {
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "130%",
    },
    paragraphDefault: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "130%",
    },
    textLG: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "130%",
    },
    headingDefault: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
    },
  },
  palette: {
    primary: {
      main: "#0070D2",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: "medium",
      },
      styleOverrides: {
        contained: {
          // backgroundColor: "#0070D2 !important",
          ":disabled": {
            backgroundColor: "#DFE3E6 !important",
            color: "#66727A !important",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },

    MuiInputBase: {
      defaultProps: {
        autoComplete: "off",
        fullWidth: true,
      },
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            padding: "0.65rem",
          },
        },
        root: {
          minWidth: "100%",
          height: "40px",

          "&:hover": {
            backgroundColor: "#EFF1F3",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon,
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: "200px", // replace with your desired height
            },
          },
        },
      },
      styleOverrides: {
        select: {
          '&[name="name"]': {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            "&::after": {
              content: "attr(data-placeholder)",
              display: "block",
              color: "#aaa",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: "4px",
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "14px",
          textTransform: "none",
          minWidth: 0,
          padding: "12px 15px",
          borderRadius: "8px 8px 0 0",
          lineHeight: "18.2px",
          fontWeight: "500",
          "&:not(.Mui-selected)": {
            backgroundColor: "#DFE3E6",
            color: "#232930",
          },

          "&:hover": {
            color: "#1976d2",
            opacity: 1,
          },
          "&.Mui-selected": {
            zIndex: 1,
            backgroundColor: "#fff",
            color: "#0070D22",
            "&:before": {
              content: '""',
              position: "absolute",
              top: "3px",
              left: "2px",
              right: "2px",
              bottom: 0,
              boxShadow: "rgba(123, 123, 123, 0.1) 0 -5px 6px 0 ",
              borderRadius: "8px 8px 0 0",
              zIndex: -1,
            },
          },
          "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)",
          },
        },
      },
    },
  },
});
