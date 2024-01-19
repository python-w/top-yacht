import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: 40,
  fontFamily: 'Hellix',
  '& .MuiInputBase-input': {
    backgroundColor: "#fff",
    padding: theme.spacing(1, 0, 1, 2),
    border: '1px solid #C2CBD6',
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      borderRadius: '12px',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

export default StyledInputBase;