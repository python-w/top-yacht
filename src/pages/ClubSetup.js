import { Box, Checkbox, Divider, FormControlLabel, Grid, Switch, Table, TableHead, Typography, styled } from "@mui/material";
import CustomDrawer from "../components/Navigation/CustomDrawer";
import PageHeader from "../ui/PageHeader";
import PageBody from "../ui/PageBody";
import StyledInputBase from "../ui/InputBase";
import FormLabel from "../ui/FormLabel";
import { GridRow } from "../ui/GridRow";
import { useState } from "react";
import CustomPhoneInput from "../ui/PhoneInput";
import FormSectionTitle from "../ui/FormSectionTitle";
import CustomTable from "../ui/CustomTable";

const ClubSetup = () => {
  //Phone Inputs
  const [phones, setPhones] = useState(["", ""]);
  const [additionalPhone, setAdditionalPhone] = useState("");
  const labels = ["Phone # 1", "Phone # 2"];

  const handlePhoneChange = (value, index) => {
    const updatedPhones = [...phones];
    updatedPhones[index] = value;
    setPhones(updatedPhones);
  };

  const handleAdditionalPhoneChange = (value) => {
    setAdditionalPhone(value);
  };

  //Table Data
  const headers = ["Name", "Role", "Phone #", "Email Address"];
  const data = [
    ['John Doe', 'Admin', '123-456-7890', 'john@example.com'],
    ['Jane Smith', 'User', '987-654-3210', 'jane@example.com'],
    ['John Doe', 'Admin', '123-456-7890', 'john@example.com']
  ];

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box className="main_view" sx={{ flexGrow: 1, p: 3, pr: 0 }}>
      <DrawerHeader />
      <Box className="page_outer" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)", borderRadius: "32px", overflow: "hidden" }}>
        <PageHeader title="Club Setup" />
        <PageBody>
          <GridRow container spacing={4} justifyContent="space-between">
            <Grid item md={3}>
              <FormLabel htmlFor="clubName" isRequired={true}>
                Club Name
              </FormLabel>
              <StyledInputBase id="clubName" />
            </Grid>
            <Grid item>
              <FormLabel htmlFor="arch" isRequired={true}>
                Archive
              </FormLabel>
              <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Enabled</Typography>} />
            </Grid>
          </GridRow>
          <GridRow container spacing={4}>
            <Grid item md={3}>
              <FormLabel htmlFor="clubType" isRequired={true}>
                Type
              </FormLabel>
              <Box xs={{ gap: "25px" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="KB" />
                <FormControlLabel control={<Checkbox />} label="OTB" />
                <FormControlLabel control={<Checkbox />} label="Other" />
              </Box>
            </Grid>
            <Grid item md={3}>
              <FormLabel htmlFor="clubType" isRequired={true}>
                Staff
              </FormLabel>
              <Box xs={{ gap: "25px" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Fully Volunteer Run Club" />
              </Box>
            </Grid>
            <Grid item md={3}>
              <FormLabel htmlFor="clubType" isRequired={true}>
                Source of Entrants
              </FormLabel>
              <Box xs={{ gap: "25px" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="TES" />
                <FormControlLabel control={<Checkbox />} label="CSV Import" />
                <FormControlLabel control={<Checkbox />} label="Manual" />
              </Box>
            </Grid>
          </GridRow>
          <GridRow container spacing={4}>
            <Grid item md={3}>
              <CustomPhoneInput defaultCountry="us" label="Sailing Manager Contact" isRequired={true} value={additionalPhone} onChange={(value) => handleAdditionalPhoneChange(value)} />
            </Grid>
          </GridRow>
          <GridRow container spacing={4}>
            {phones.map((phone, index) => (
              <Grid item md={3}>
                <CustomPhoneInput key={index} defaultCountry="us" isRequired={true} label={labels[index]} value={phone} onChange={(value) => handlePhoneChange(value, index)} />
              </Grid>
            ))}
            <Grid item md={3}>
              <FormLabel htmlFor="clubName" isRequired={true}>
                Email Address
              </FormLabel>
              <StyledInputBase id="clubName" placeholder="e.g abc@email.com" />
            </Grid>
          </GridRow>
          <Divider />
          <FormSectionTitle>Other Contacts</FormSectionTitle>
          <CustomTable headers={headers} data={data} />
        </PageBody>
      </Box>
    </Box>
  );
};

export default ClubSetup;
