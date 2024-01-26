import { createTheme } from "@mui/material";
import BodyBg from './images/body-bg.png';
import { get4k } from "./utils/Helpers";


const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#356DAD',
    },
    secondary: {
      main: '#42566C',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1025,
      xl: 1366,
      xxxl: 2201
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Hellix', // Set the default font family for the body
          fontWeight: 400,
          fontSize: '18px',
          backgroundColor: '#eff7f7',
          backgroundImage: `url(${BodyBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'var(--body-text-color)'
        },
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
        p: {
          marginTop: 0
        },
        '.MuiPopover-root .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
          borderRadius: '8px',
          border: '1px solid #F0F0F0',
          background: '#FFF',
          boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
          marginTop: '3px',
        },

        '.MuiPopover-root .MuiMenuItem-root': {
          borderRadius: '8px',
          padding: '12px',
          height: 'auto',
        },
        '.MuiPopover-root .css-jezgo-MuiButtonBase-root-MuiMenuItem-root.Mui-selected': {
          background: '#E8EFF8',
        },
        '.MuiPopover-root .css-jezgo-MuiButtonBase-root-MuiMenuItem-root:hover': {
          background: '#fff',
        },
        '.MuiPopover-root .css-1pvtjvc-MuiList-root-MuiMenu-list': {
          padding: '8px',
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
          border: 'none',
          background: 'transparent',
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
    MuiListItem: {
      styleOverrides: {
        root: {
          "& .hasActiveChild": {
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            width: '48px',
            borderRadius: 16,
            '@media (min-width: 2201px)': {
              width: get4k(48)
            }
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