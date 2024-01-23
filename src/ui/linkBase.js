import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import styled from "styled-components"
import NavLink from "react-router-dom";

const linkBase = styled.NavLink`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: var(--body-text-color);
  margin-bottom: 8px;
  text-transform: uppercase;

  span {
    color: red;
    display: inline-block;
    margin-left: 8px;
  }
`
export default linkBase;