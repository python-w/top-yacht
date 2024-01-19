import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Avatar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import ProfileMember from "../../images/member.png";
import CPhoneSvg from '../../images/Phone.svg';
import CGiftSvg from '../../images/Gift.svg';
import CSearchSvg from '../../images/Search.svg';
import CComputerSvg from '../../images/Computer.svg';
import CSearchIcon from '../../images/Search.svg';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StyledInputBase from "../styled/inputBase";


const CstAppbar = ({onDrawerOpen, ondrawerWidth}) => {
  const theme = useTheme();
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    top: 0,
  }));

  // const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  //   width: `calc(100% - ${theme.spacing(8)} + 1px)`,
  //   zIndex: theme.zIndex.drawer,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   ...(open && {
  //     marginLeft: ondrawerWidth,
  //     width: `calc(100% - ${ondrawerWidth}px)`,
  //     transition: theme.transitions.create(["width", "margin"], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }),
  //   "& .MuiToolbar-root": {
  //     justifyContent: "flex-end",
  //   },
  // }));
  
  return (
    <MuiAppBar position="fixed" open={onDrawerOpen} sx={{marginLeft: onDrawerOpen ? ondrawerWidth : '', width: onDrawerOpen ? `calc(100% - ${ondrawerWidth}px)` : `calc(100% - ${theme.spacing(8)} + 1px)`, "& .MuiToolbar-root": {
      justifyContent: "flex-end",
    }, }}>
      <Toolbar>
        <Search>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            sx={{
              "& .MuiInputBase-input": {
                border: "none",
                width: "360px",
                "&:focus": {
                  width: "380px",
                },
              },
            }}
          />
          <SearchIconWrapper>
            <img src={CSearchIcon} alt=""/>
          </SearchIconWrapper>
        </Search>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD" }}>
          <Tooltip title="Open">
            <img src={CPhoneSvg} alt="" />
          </Tooltip>
        </IconButton>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD" }}>
          <Tooltip title="Open2">
            <img src={CGiftSvg} alt="" />
          </Tooltip>
        </IconButton>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD" }}>
          <Tooltip title="Open3">
            <img src={CComputerSvg} alt="" />
          </Tooltip>
        </IconButton>
        <Box sx={{ flexGrow: 0, paddingLeft: 3 }}>
          <Tooltip title="Open settings">
            <IconButton disableRipple onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={ProfileMember} variant="square" sx={{ borderRadius: "8px" }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 1.5 }}>
                  <Typography variant="h6" sx={{ color: "#356DAD", fontSize: 16 }}>
                    Chris
                  </Typography>
                  <Typography variant="p" sx={{ fontSize: "14px", fontWeight: 600, color: "#848484" }}>
                    Senior Member
                  </Typography>
                </Box>
                <ChevronLeftIcon sx={{ transform: `rotate(-90deg)`, color: "#848484", marginLeft: 1 }} />
              </Box>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
export default CstAppbar;
