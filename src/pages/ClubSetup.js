import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Box, Typography, Tabs, Tab, Grid, FormControl, Input, InputLabel, InputBase, TextField } from "@mui/material";
import CustomDrawer from "../components/Navigation/CustomDrawer";
import PageHeader from "../ui/PageHeader";
import PageBody from "../ui/PageBody";
import { Label } from "@mui/icons-material";
import FormControlCustom from "../ui/FormControlCustom";

const ClubSetup = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box className="main_view" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Box className="page_outer" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)", borderRadius: "32px", overflow: "hidden" }}>
        <PageHeader title="Club Setup" />
        <PageBody>
          <Grid container spacing={2}>
            <Grid item md={4}></Grid>
          </Grid>
        </PageBody>
      </Box>
    </Box>
  );
};

export default ClubSetup;
