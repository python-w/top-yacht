import { createTheme } from "@mui/material";
import BodyBg from "./images/body-bg.png";
import { get4k, mediaQueries } from "./utils/Helpers";

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#356DAD",
    },
    secondary: {
      main: "#42566C",
    },
  },
  typography: {
    fontFamily: "Hellix, sans-serif",
  },
  breakpoints: {
    values: {
      xs: mediaQueries.xs,
      sm: mediaQueries.sm,
      md: mediaQueries.md,
      lg: mediaQueries.lg,
      xl: mediaQueries.xl,
      xxxl: mediaQueries.xxxl,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "*": {
          scrollbarColor: "rgba(29, 81, 141, 0) transparent",
          scrollbarWidth: "thin",
          "&:hover": {
            scrollbarColor: "rgba(29, 81, 141, 0.7) transparent",
          },
          "&::-webkit-scrollbar": {
            borderRadius: 0,
            width: "4px",
            height: "4px",
            [theme.breakpoints.up("xxxl")]: {
              width: get4k(4),
              height: get4k(4),
            },
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
            boxShadow: "none",
            borderRadius: "10px",
            margin: 0,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "rgba(29, 81, 141, 0)",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(29, 81, 141, 0.7)",
          },
        },
        body: {
          fontFamily: "Hellix, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          [theme.breakpoints.up("xxxl")]: {
            fontSize: get4k(18),
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: "18px",
          },
          [theme.breakpoints.down("xl")]: {
            fontSize: "16px",
          },
          backgroundColor: "#eff7f7",
          backgroundImage: `url(${BodyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "var(--body-text-color)",
        },
        p: {
          marginTop: 0,
        },
        button: {
          fontFamily: "Hellix, sans-serif",
        },
        ".navigationDrawer": {
          "& .MuiTypography-root": {
            fontWeight: 600,
          },
          "& .MuiList-root .MuiList-root .MuiTypography-root": {
            fontWeight: 600,
            letterSpacing: 0,
          },
          "& .MuiList-root .MuiDivider-root": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        },
        ".MuiPopover-root .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
          borderRadius: "8px",
          border: "1px solid #F0F0F0",
          background: "#FFF",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
          marginTop: "3px",
          [theme.breakpoints.up("xxxl")]: {
            marginTop: get4k(3),
            borderRadius: get4k(8),
          },
        },

        ".MuiPopover-root .MuiMenuItem-root": {
          borderRadius: "8px",
          padding: "12px",
          height: "auto",
          [theme.breakpoints.up("xxxl")]: {
            borderRadius: get4k(8),
            padding: get4k(12),
          },
        },
        ".MuiPopover-root .MuiMenuItem-root.Mui-selected": {
          background: "#E8EFF8",
        },
        ".MuiPopover-root .MuiMenuItem-root:hover": {
          background: "rgba(0,0,0,0.025)",
        },
        ".MuiPopover-root .MuiMenu-list": {
          padding: "8px",
          [theme.breakpoints.up("xxxl")]: {
            padding: get4k(8),
          },
        },
        ".MuiTooltip-popper": {
          "& .MuiTooltip-tooltip": {
            background: "var(--body-text-color)",
          },
          "& .MuiTooltip-arrow:before": {
            background: "var(--body-text-color)",
          },
        },
        ".main_view": {
          width: "100%",
          flexGrow: 1,
          height: "100vh",
          padding: "24px 0",
          [theme.breakpoints.up("xxxl")]: {
            padding: `${get4k(24)} 0`,
          },
        },
        ".page_outer": {
          height: "calc(100% - 64px)",
          backgroundColor: "rgba(199, 219, 229, 0.25)",
          borderRadius: "32px",
          overflow: "hidden",
          [theme.breakpoints.up("xxxl")]: {
            height: `calc(100% - ${get4k(46)})`,
            borderRadius: get4k(32),
          },
          [theme.breakpoints.down("md")]: {
            borderRadius: "16px",
          },
        },
        ".page_container": {
          height: "calc(100% - 76px)",
          overflowY: "auto",
          background: "#fff",
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            background: "#fff",
          },
          [theme.breakpoints.up("xxxl")]: {
            height: `calc(100% - ${get4k(76)})`,
          },
        },
        ".page_inner": {
          padding: "24px 32px",
          [theme.breakpoints.up("xxxl")]: {
            padding: `${get4k(24)} ${get4k(32)}`,
          },
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 18,
          "@media (min-width: 2201px)": {
            fontSize: get4k(18),
          },
        },
        paragraph: {
          fontWeight: 400,
        },
        h1: {
          fontWeight: 600,
        },
        h2: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 600,
        },
        h6: {
          fontWeight: 600,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        nativeInput: {
          position: "absolute !important",
        },
        select: {
          minHeight: "initial",
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: 0,
          height: "calc(var(--field-height) * 1px)",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          background: "transparent",
          // backgroundImage: 'linear-gradient(#356DAD, transparent)',
          // backgroundColor: "#1D518D",
          // color: "#fff",
          // border: 'none',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
            // borderColor: 'transparent',
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(29, 81, 141, 0.5)",
            // borderColor: "rgba(29, 81, 141, 0.5)",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          display: "block",
          fontWeight: "bold",
          color: "var(--body-text-color)",
          marginBottom: "8px",
          textTransform: "uppercase",
          "@media (min-width: 2201px)": {
            fontSize: get4k(14),
          },
          "& .required": {
            color: "red",
            display: "inline-block",
            marginLeft: "8px",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "& .hasActiveChild": {
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            width: "48px",
            borderRadius: 16,
          },
          "& .MuiTypography-root": {
            fontSize: 16,
            "@media (min-width: 2201px)": {
              fontSize: get4k(16),
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#356DAD",
        },
      },
    },
  },
});

export default CustomTheme;
