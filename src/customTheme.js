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
  typography: {
    fontFamily: 'Hellix, sans-serif',
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
        '*': {
          scrollbarColor: 'rgba(29, 81, 141, 0.7) transparent',
          scrollbarWidth: 'thin',
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            borderRadius: 0,
            width: '4px',
            height: '4px',
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: "10px",
            margin: 0,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "rgba(29, 81, 141, 0.7)",
          },
        },
        body: {
          fontFamily: 'Hellix, sans-serif', // Set the default font family for the body
          fontWeight: 400,
          fontSize: '18px',
          backgroundColor: '#eff7f7',
          backgroundImage: `url(${BodyBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'var(--body-text-color)',
        },
        p: {
          marginTop: 0
        },
        button: {
          fontFamily: 'Hellix, sans-serif',
        },
        '.navigationDrawer': {
          '& .MuiTypography-root': {
            fontWeight: 600,
          },
          '& .MuiList-root .MuiList-root .MuiTypography-root': {
            fontWeight: 600,
            letterSpacing: 0,
          },
          '& .MuiList-root .MuiDivider-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
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
        '.main_view': {
          width: '100%',
          flexGrow: 1,
          height: '100vh',
          padding: '24px 0',
        },
        '.page_outer': {
          height: 'calc(100% - 64px)',
          backgroundColor: 'rgba(199, 219, 229, 0.25)',
          borderRadius: '32px',
          overflow: 'hidden',
        },
        '.page_container': {
          height: 'calc(100% - 76px)',
          overflowY: 'auto',
          background: '#fff',
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            background: '#fff',
          },
        },
        '.page_inner': {
          padding: '24px 32px'
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
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