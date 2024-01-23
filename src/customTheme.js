import { createTheme } from "@mui/material";
import BodyBg from './images/body-bg.png';


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
          fontFamily: 'Hellix', // Set the default font family for the body
          backgroundColor: '#eff7f7',
          backgroundImage: `url(${BodyBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          fontWeight: 400,
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
    MuiListItem: {
      styleOverrides: {
        root: {
          "& .hasActiveChild": {
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            width: '48px',
            borderRadius: 16
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