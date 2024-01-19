import { createTheme } from "@mui/material";
import HellixThin from "./components/fonts/Hellix-Thin.woff2";
import HellixLight from "./components/fonts/Hellix-Light.woff2";
import HellixRegular from "./components/fonts/Hellix-Regular.woff2";
import HellixMedium from "./components/fonts/Hellix-Medium.woff2";
import HellixSemibold from "./components/fonts/Hellix-SemiBold.woff2";
import HellixBold from "./components/fonts/Hellix-Bold.woff2";
import HellixExtraBold from "./components/fonts/Hellix-ExtraBold.woff2";
import HellixBlack from "./components/fonts/Hellix-Black.woff2";
import BodyBg from './images/body-bg.png';

const CustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 768,
      lg: 992,
      xl: 1200,
      xxxl: 2201
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#eff7f7',
          backgroundImage: `url(${BodyBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
        body1: {
          fontFamily: 'Hellix', // Set the default font family for the body
          fontWeight: 400,
        },
        "@font-face": [
          {
            fontFamily: 'Hellix',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 400,
            src: `local('Hellix'), local('Hellix-Regular'), url(${HellixRegular}) format('woff2')`,
          },
          {
            fontFamily: 'Hellix Medium',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 500,
            src: `local('Hellix-Medium'), local('Hellix-Medium'), url(${HellixMedium}) format('woff2')`,
          },
          {
            fontFamily: 'Hellix Semibold',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 600,
            src: `local('Hellix-Semibold'), local('Hellix-Semibold'), url(${HellixSemibold}) format('woff2')`,
          },
          {
            fontFamily: 'Hellix Bold',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 700,
            src: `local('Hellix-Bold'), local('Hellix-Bold'), url(${HellixBold}) format('woff2')`,
          },
        ],
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          borderRadius: 10,
          height: 50,
          width: '8px',
          padding: 8,
        },
        "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
          webkitBoxShadow: "inset 0 0 2px rgba(0,0,0,0.3)",
          borderRadius: "5px",
          marginTop: "5px",
          marginBottom: "5px",
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 10,
          backgroundColor: "rgba(29, 81, 141, 0.7)",
          minHeight: 24,
          // border: "3px solid rgba(29, 81, 141, 0.5)",
          marginRight: 10,
        },        
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Hellix",
        },
        paragraph: {
          fontWeight: 400
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
      }
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
          backgroundImage: 'linear-gradient(#356DAD, transparent)',
          backgroundColor: "#1D518D",
          color: "#fff",
          border: 'none',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: 'transparent',
            // borderColor: 'transparent',
          },
          "&:hover::-webkit-scrollbar-thumb, &:hover *::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(29, 81, 141, 0.5)",
            // borderColor: "rgba(29, 81, 141, 0.5)",
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#356DAD',
        }
      }
    }
  },
});

export default CustomTheme;
