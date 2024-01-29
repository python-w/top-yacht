import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Avatar, useMediaQuery } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { get4k } from "../../utils/Helpers";
import ProfileMember from "../../images/member.png";
import CPhoneSvg from '../../images/Phone.svg';
import CGiftSvg from '../../images/Gift.svg';
import CSearchSvg from '../../images/Search.svg';
import CComputerSvg from '../../images/Computer.svg';
import CSearchIcon from '../../images/Search.svg';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StyledInputBase from "../../ui/InputBase";
import DrawerIcon from "../../images/menu-icon.svg";


const CstAppbar = ({ onDrawerOpen, ondrawerWidth, onBelowXlBreakpoint, onBelowLgBreakpoint, onhandleDrawerToggle }) => {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    minHeight: 80
  }));
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
    '& .MuiInputBase-input': {
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
    },
    [theme.breakpoints.up("xs")]: {
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

  return (
    <MuiAppBar position="fixed" open={onDrawerOpen} sx={{
      zIndex: -1,
      marginLeft: onDrawerOpen ? ondrawerWidth : '', width: !onBelowXlBreakpoint ? onDrawerOpen ? `calc(100% - ${ondrawerWidth}px)` : `calc(100% - ${theme.spacing(13.125)} + 1px)` : `100%`
    }}>
      <Toolbar sx={{ justifyContent: "flex-end", [theme.breakpoints.up("xs")]: { minHeight: 80 } }}>
        {onBelowXlBreakpoint ? <IconButton disableRipple onClick={onhandleDrawerToggle} className="navDrawerMobileBtn" sx={{ color: "#fff", padding: 0, width: 28, height: 28, borderRadius: 0, overflow: "hidden", marginRight: 'auto', [theme.breakpoints.up("xxxl")]: { width: get4k(28), height: get4k(28)} }}><img alt="Drawer Button" src={DrawerIcon} style={{ position: "absolute", width: "100%", height: "100%" }} /></IconButton> : ''
        }
        <Search sx={{
          [theme.breakpoints.up("xxxl")]: {
            width: get4k(360)
          },
          [theme.breakpoints.up("md")]: {
            width: 360,
          },
          [theme.breakpoints.down("md")]: {
            width: 298,
          }
        }}>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            sx={{
              "& .MuiInputBase-input": {
                border: "none",
                '&:focus': {
                  width: '110%'
                }
              },
            }}
          />
          <SearchIconWrapper>
            <img src={CSearchIcon} alt="" width={20} height={20} />
          </SearchIconWrapper>
        </Search>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD", [theme.breakpoints.up("xxxl")]: {marginLeft: get4k(1.5)} }}>
          <Tooltip title="Open">
            <img src={CPhoneSvg} alt="" />
          </Tooltip>
        </IconButton>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD", [theme.breakpoints.up("xxxl")]: {marginLeft: get4k(1.5)} }}>
          <Tooltip title="Open2">
            <img src={CGiftSvg} alt="" />
          </Tooltip>
        </IconButton>
        <IconButton disableRipple sx={{ backgroundColor: "#F5F9FA", borderRadius: "8px", marginLeft: 1.5, color: "#356DAD", [theme.breakpoints.up("xxxl")]: {marginLeft: get4k(1.5)} }}>
          <Tooltip title="Open3">
            <img src={CComputerSvg} alt="" />
          </Tooltip>
        </IconButton>
        <Box sx={{ flexGrow: 0, paddingLeft: 3, [theme.breakpoints.up("xxxl")]: {paddingLeft: get4k(24)} }}>
          <Tooltip title="Open settings">
            <IconButton disableRipple onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={ProfileMember} variant="square" sx={{ borderRadius: "8px" }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {!onBelowLgBreakpoint ?
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 1.5 }}>
                    <Typography variant="h6" sx={{ color: "#356DAD", fontSize: 16, [theme.breakpoints.up("xxxl")]: {fontSize: get4k(16)} }}>
                      Chris
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: 14, fontWeight: 600, color: "#848484", [theme.breakpoints.up("xxxl")]: {fontSize: get4k(14)} }}>
                      Senior Member
                    </Typography>
                  </Box>
                  : ''}
                <ChevronLeftIcon sx={{ transform: `rotate(-90deg)`, color: "#848484", marginLeft: 1, [theme.breakpoints.up("xxxl")]: {marginLeft: get4k(8)} }} />
              </Box>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px", [theme.breakpoints.up("xxxl")]: {mt: get4k(45)} }}
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
