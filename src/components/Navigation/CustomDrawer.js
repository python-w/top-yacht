import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, Tooltip, Avatar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleRounded from "@mui/icons-material/CircleRounded";
import DrawerBtnBg from "../../images/DrawerBtnBg.svg";
import CRaceDaySvg from "../../images/RaceDay.svg";
import CReportsSvg from "../../images/Reports.svg";
import CEntrantsSvg from "../../images/Entrants.svg";
import CSetupSvg from "../../images/SetUp.svg";
import CConfigurationSvg from "../../images/Configuration.svg";
import CstAppbar from "./CstAppbar";
import { get4k } from "../../utils/Helpers";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { styled as styledC } from 'styled-components';
import ClubLogo from '../../images/logo.svg';
import ClubLogoIcon from '../../images/logo-icon.svg';
import AppLogo from '../../images/appLogo.svg';
import AppLogoIcon from '../../images/appLogoIcon.svg';
import UnionBg from '../../images/union.svg';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const drawerWidth = 400;

const openedMixin = (theme) => ({
  width: `calc((${drawerWidth} + 16) * 1px)`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "hidden",
  [theme.breakpoints.up("xxxl")]: {
    borderRadius: `0 ${get4k(40)} ${get4k(40)} 0`,
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xxxl")]: {
    borderRadius: `0 ${get4k(40)} ${get4k(40)} 0`,
  },
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(15)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  overflow: "hidden",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;

  &:hover {
    text-decoration: none;
  }
`;

const LogoBgStyled = styledC.div`
  position: absolute;
  right: -58px;
  width: 86px;
  height: 100%;
  z-index: 1;
  transform: rotate(180deg) scaleX(-1);
  & .logoBg {
    height: 100%;
    width: auto;
  }
`

const MiniDrawer = () => {
  const theme = useTheme();

  const isBelowXlBreakpoint = useMediaQuery(theme.breakpoints.down('xl'));
  const is4KScreen = useMediaQuery(theme.breakpoints.down('xxxl'));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, is4KScreen ? get4k(2.5) : 2.5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const CloseDrawer = (drawerState) => () => {
    setIsDrawerOpen(drawerState);
  };

  const menuItems = [
    {
      menu: "Race Day",
      children: [
        { label: "Race Session", path: "/race-session" },
        { label: "Finish Time Entry", path: "/finish-time-entry" },
        { label: "Sharing Race Session Data", path: "/sharing-session-data" },
      ],
      icon: CRaceDaySvg,
    },
    {
      menu: "Reports",
      children: [
        { label: "Results", path: "/results" },
        { label: "Today's Winners", path: "/twinners" },
        { label: "Entrants", path: "/entrants" },
        { label: "Handicap", path: "/handicap" },
      ],
      icon: CReportsSvg,
    },
    {
      menu: "Entrants",
      children: [
        { label: "KB Entrants", path: "/kb-entrants" },
        { label: "OTB Entrants", path: "/otb-entrants" },
      ],
      icon: CEntrantsSvg,
    },
    {
      menu: "Setup",
      children: [
        { label: "Event Setup", path: "/club-setup" },
        { label: "Series Setup - KB", path: "/series-setup-kb" },
        { label: "Series Setup - OTB", path: "/series-setup-otb" },
        { label: "Race Calendar", path: "/race-calendar" },
      ],
      icon: CSetupSvg,
    },
    { menu: "Settings", children: [{ label: "Event Setup", path: "/event-setup" }], icon: CConfigurationSvg },
  ];

  function CheckIfActive(menuItem) {
    const location = useLocation();
    return menuItem.children.some(child => child.path === location.pathname);
  }

  function CheckIfActiveChild(menuItemChild) {
    const location = useLocation();
    console.log(menuItemChild.path, menuItemChild.path === location.pathname)
    return menuItemChild.path === location.pathname;
  }

  return (
    <>
      <Drawer className="navigationDrawer" variant="permanent" open={isDrawerOpen} anchor={"left"} onClose={() => setIsDrawerOpen(false)}>
        {!isBelowXlBreakpoint ?
          <IconButton disableRipple className="navDrawerBtn" onClick={handleDrawerToggle} sx={{ position: "absolute", right: 1, color: "#fff", height: 120, padding: 0, width: 16, top: 56, borderRadius: 0, overflow: "hidden" }}>
            <img alt="Drawer Button" src={DrawerBtnBg} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }} />
            {isDrawerOpen ? <ChevronLeftIcon sx={{ zIndex: 2, fontSize: 24 }} /> : <ChevronRightIcon sx={{ zIndex: 2, fontSize: 24 }} />}
          </IconButton>
          : ''}
        <Box sx={{ backgroundImage: 'linear-gradient(#356DAD, transparent)', backgroundColor: "#1D518D", color: "#fff", border: 'none', width: `calc(100% - 16px)`, borderRadius: "0 40px 40px 0", position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', overflowY: !isDrawerOpen ? 'hidden' : 'visible' }}>
          <CstAppbar onDrawerOpen={isDrawerOpen} ondrawerWidth={drawerWidth} onBelowXlBreakpoint={isBelowXlBreakpoint} onhandleDrawerToggle={handleDrawerToggle} />
          <DrawerHeader className="drawerHeader" sx={{
            [theme.breakpoints.up("sm")]: {
              minHeight: 84,
              padding: !isDrawerOpen ? '0 12px' : '0 32px',
              zIndex: 1101
            },
          }}>
            <Box sx={{ backgroundColor: "white", width: isDrawerOpen ? 232 : 88, height: 84, borderRadius: isDrawerOpen ? '0 0 30px 30px' : '0 0 25px 25px', display: 'flex', alignItems: 'center', padding: 2, position: 'relative', transition: theme.transitions.create("border-radius", { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }) }}>
              {!isDrawerOpen ?
                <img src={ClubLogoIcon} width={39} height={52} />
                :
                <>
                  <img src={ClubLogo} width={204} height={52} />
                  <LogoBgStyled>
                    <img src={UnionBg} width={86} height={69} className="logoBg" />
                  </LogoBgStyled>
                </>
              }
            </Box>
            {isDrawerOpen ?
              <IconButton disableRipple className="navDrawerBtn" onClick={CloseDrawer(false)} sx={{ position: "absolute", right: 30, color: "#fff", height: 120, padding: 0, width: 16, height: 16, borderRadius: 0, overflow: "hidden" }}>
                <CloseOutlinedIcon sx={{ zIndex: 2, fontSize: 24 }} />
              </IconButton>
              : ''}
          </DrawerHeader>
          <List sx={{
            overflowY: "auto", overflowX: "hidden", marginRight: "16px", marginLeft: isDrawerOpen ? 0 : "16px", mt: 4,
            [theme.breakpoints.up("xxxl")]: {
              marginRight: get4k(8), marginLeft: isDrawerOpen ? 0 : get4k(8), mt: get4k(32)
            }
          }}>
            {menuItems.map((menuItem, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItem
                  sx={{
                    minHeight: 48,
                    justifyContent: isDrawerOpen ? "initial" : "center",
                    pr: 2,
                    pl: isDrawerOpen ? 4 : 2,
                    marginBottom: isDrawerOpen ? 0 : 1,
                    marginInline: isDrawerOpen ? 0 : "auto",
                    width: isDrawerOpen ? "100%" : "48px",
                    [theme.breakpoints.up("xxxl")]: {
                      minHeight: get4k(48),
                      pr: get4k(16),
                      pl: isDrawerOpen ? get4k(32) : get4k(16),
                      width: isDrawerOpen ? "100%" : get4k(48),
                    }
                  }}
                  className={!isDrawerOpen && CheckIfActive(menuItem) ? 'hasActiveChild' : ''}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isDrawerOpen ? (is4KScreen ? get4k(12) : 1.5) : 0,
                      justifyContent: "center",
                    }}
                  >
                    <img src={menuItem.icon} alt="" />
                  </ListItemIcon>
                  {isDrawerOpen ? <ListItemText primary={menuItem.menu} sx={{ textTransform: "uppercase" }} /> : ""}
                </ListItem>
                {isDrawerOpen ? (
                  <>
                    <List sx={{ pb: 0 }}>
                      {menuItem.children.map((menuItemChild, index) => (
                        <ListItem key={index} disablePadding sx={{ display: "block" }}>
                          <StyledNavLink to={menuItemChild.path}>
                            <ListItemButton
                              sx={{
                                minHeight: is4KScreen ? get4k(48) : 48,
                                justifyContent: isDrawerOpen ? "initial" : "center",
                                pl: is4KScreen ? get4k(40) : 5,
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: is4KScreen ? get4k(16) : 2,
                                  justifyContent: "center",
                                  "&::before": {
                                    content: '""',
                                    width: CheckIfActiveChild(menuItemChild) ? 16 : 6,
                                    height: 6,
                                    backgroundColor: 'white',
                                    borderRadius: '100px',
                                    transition: theme.transitions.create("width", {
                                      easing: theme.transitions.easing.sharp,
                                      duration: theme.transitions.duration.enteringScreen,
                                    }),
                                  }
                                }}
                              >
                              </ListItemIcon>

                              <ListItemText primary={menuItemChild.label} />
                            </ListItemButton>
                          </StyledNavLink>
                        </ListItem>
                      ))}
                    </List>
                    <Divider sx={{ mr: is4KScreen ? get4k(8) : 1, ml: is4KScreen ? get4k(32) : 4, justifyContent: "center", my: is4KScreen ? get4k(20) : "20px", backgroundColor: "rgba(255,255,255,0.2)" }} />
                  </>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mx: 2, mt: 'auto' }} />
          <Box sx={{ width: '100%', height: 84, display: 'flex', alignItems: 'center', padding: 2, paddingLeft: !isDrawerOpen ? 2 : 4, paddingBottom: 4, position: 'relative', justifyContent: !isDrawerOpen ? 'center' : 'flex-start' }}>
            {!isDrawerOpen ?
              <img src={AppLogoIcon} width={25} height={52} />
              :
              <>
                <img src={AppLogo} width={125} height={37} />
              </>
            }
          </Box>
        </Box>
      </Drawer>
      <Outlet />
    </>
  );
};

export default MiniDrawer;
