import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, Tooltip, Avatar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleRounded from "@mui/icons-material/CircleRounded";
import DrawerBtnBg from "../../images/DrawerBtnBg.svg";
import CRaceDaySvg from '../../images/RaceDay.svg';
import CReportsSvg from '../../images/Reports.svg';
import CEntrantsSvg from '../../images/Entrants.svg';
import CSetupSvg from '../../images/SetUp.svg';
import CConfigurationSvg from '../../images/Configuration.svg';
import CstAppbar from './CstAppbar';
import { get4k } from "../../utils/Helpers";

const drawerWidth = 400;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "visible",
  borderRadius: "0 40px 40px 0",
  [theme.breakpoints.up("xxxl")]: {
    borderRadius: `0 ${get4k(40)} ${get4k(40)} 0`,
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: "visible",
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderRadius: "0 40px 40px 0",
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

const MiniDrawer = () => {
  const is4KScreen = useMediaQuery("(min-width: 2201px) and (max-width: 4000px)");

  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { menu: "Race Day", children: [{ label: "Race Session" }, { label: "Finish Time Entry" }, { label: "Sharing Race Session Data" }], icon: CRaceDaySvg },
    { menu: "Reports", children: [{ label: "Results" }, { label: "Today's Winners" }, { label: "Entrants" }, { label: "Handicap" }], icon: CReportsSvg },
    { menu: "Entrants", children: [{ label: "KB Entrants" }, { label: "OTB Entrants" }], icon: CEntrantsSvg },
    { menu: "Setup", children: [{ label: "Event Setup" }, { label: "Series Setup - KB" }, { label: "Series Setup - OTB" }, { label: "Race Calendar" }], icon: CSetupSvg },
    { menu: "Settings", children: [{ label: "Event Setup" }], icon: CConfigurationSvg },
  ];

  return (
    <>
      <Drawer className="navigationDrawer" variant="permanent" open={isDrawerOpen} anchor={"left"} onClose={() => setIsDrawerOpen(false)}>
        <CstAppbar onDrawerOpen={isDrawerOpen} ondrawerWidth={drawerWidth} />
        <IconButton disableRipple className="navDrawerBtn" onClick={handleDrawerToggle} sx={{ position: "absolute", right: -15, color: "#fff", height: 120, padding: 0, width: 16, top: 56, borderRadius: 0, overflow: "hidden" }}>
          <img alt="Drawer Button" src={DrawerBtnBg} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }} />
          {isDrawerOpen ? <ChevronLeftIcon sx={{ zIndex: 2, fontSize: 24 }} /> : <ChevronRightIcon sx={{ zIndex: 2, fontSize: 24 }} />}
        </IconButton>
        <DrawerHeader><Typography>Northstar</Typography></DrawerHeader>
        <List sx={{ overflowY: "auto", overflowX: "hidden", marginRight: is4KScreen ? get4k(8) : "16px", marginLeft: is4KScreen ? (isDrawerOpen ? 0 : get4k(16)) : (isDrawerOpen ? 0 : '16px') }}>
          {menuItems.map((menuItem, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItem
                sx={{
                  minHeight: is4KScreen ? get4k(48) : 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: is4KScreen ? get4k(20) : 2.5,
                  marginBottom: isDrawerOpen ? 0 : 1,
                  marginInline: isDrawerOpen ? 0 : 'auto',
                  width: isDrawerOpen ? '100%' : (is4KScreen ? get4k(48) : '48px'),
                }}
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
                {isDrawerOpen ?
                  <ListItemText primary={menuItem.menu} sx={{ textTransform: "uppercase" }} /> : ''}
              </ListItem>
              {isDrawerOpen ? (
                <>
                  <List sx={{ pb: 0 }}>
                    {menuItem.children.map((menuItemChild, index) => (
                      <ListItem key={index} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                          sx={{
                            minHeight: is4KScreen ? get4k(48) : 48,
                            justifyContent: isDrawerOpen ? "initial" : "center",
                            pl: is4KScreen ? get4k(32) : 4,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: is4KScreen ? get4k(16) : 2,
                              justifyContent: "center",
                            }}
                          >
                            <CircleRounded sx={{ fontSize: is4KScreen ? get4k(10) : 10 }} />
                          </ListItemIcon>
                          <ListItemText primary={menuItemChild.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ mr: is4KScreen ? get4k(8) : 1, ml: is4KScreen ? get4k(24) : 3, justifyContent: "center", my: is4KScreen ? get4k(20) : "20px", backgroundColor: "rgba(255,255,255,0.2)" }} />
                </>
              ) : (
                ""
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default MiniDrawer;
