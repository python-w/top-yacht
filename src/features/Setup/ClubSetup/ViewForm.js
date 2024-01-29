import { GridRow } from "../../../ui/GridRow";
import { Divider, Grid, Typography, useTheme, FormLabel } from "@mui/material";
import FormSectionTitle from "../../../ui/FormSectionTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContactsTable from "../../../ui/ContactsTable";

const StyledPara = styled(Typography)`
  margin-bottom: 0;
  padding: 8px 0;
  font-weight: 500;
  a {
    color: var(--primary-color);
  }
`;

export default function ViewForm() {
  const theme = useTheme();
  //Table Data
  const headers = ["Name", "Role", "Phone #", "Email Address"];

  const data = [
    { name: "John Doe", role: "Admin", phone: "+1 (234) 567-890", email: "john@example.com" },
    { name: "Jane Smith", role: "Admin", phone: "+1 (234) 567-890", email: "jane@example.com" },
    { name: "Oliver Simp", role: "Admin", phone: "+1 (234) 567-890", email: "oliver@example.com" },
  ];
  return (
    <>
      <GridRow container spacing={theme.breakpoints.down("md") ? 4 : 2} justifyContent="space-between">
        <Grid item md={3}>
          <FormLabel>Club Name</FormLabel>
          <StyledPara>Northstar Club</StyledPara>
        </Grid>
        <Grid item>
          <FormLabel>Archive</FormLabel>
          <StyledPara>Enabled</StyledPara>
        </Grid>
      </GridRow>
      <GridRow container spacing={7}>
        <Grid item>
          <FormLabel>Type</FormLabel>
          <StyledPara>KB</StyledPara>
        </Grid>
        <Grid item>
          <FormLabel>Staff</FormLabel>
          <StyledPara>Fully Volunteer Run Club</StyledPara>
        </Grid>
        <Grid item>
          <FormLabel>Source of Entrants</FormLabel>
          <StyledPara>TES, CSV Import</StyledPara>
        </Grid>
      </GridRow>
      <GridRow container spacing={4}>
        <Grid item md={3}>
          <FormLabel>Sailing Manager Contact</FormLabel>
          <StyledPara>
            <Link to="tel:+123453759803">+1 (234) 567-890</Link>
          </StyledPara>
        </Grid>
      </GridRow>
      <GridRow container spacing={4}>
        <Grid item md={3}>
          <FormLabel>Phone # 1</FormLabel>
          <StyledPara>
            <Link to="tel:+123453759803">+1 (234) 567-890</Link>
          </StyledPara>
        </Grid>
        <Grid item md={3}>
          <FormLabel>Phone # 2</FormLabel>
          <StyledPara>
            <Link to="tel:+123453759803">+1 (234) 567-890</Link>
          </StyledPara>
        </Grid>
        <Grid item md={3}>
          <FormLabel>Email Address</FormLabel>
          <StyledPara>
            <Link to="mailto:abc@email.com">abc@email.com</Link>
          </StyledPara>
        </Grid>
      </GridRow>
      <Divider sx={{ my: 4 }} />
      <FormSectionTitle>Other Contacts</FormSectionTitle>
      <ContactsTable headers={headers} data={data} />
      <Divider sx={{ my: 4 }} />
      <FormSectionTitle>Billing / Bank Details</FormSectionTitle>
    </>
  );
}
