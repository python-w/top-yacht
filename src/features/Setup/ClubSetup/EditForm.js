import React, { useState } from 'react'
import { GridRow } from '../../../ui/GridRow'
import { Box, Checkbox, Divider, FormControlLabel, Grid, Switch, Typography } from '@mui/material'
import FormLabel from '../../../ui/FormLabel'
import StyledInputBase from '../../../ui/InputBase'
import CustomPhoneInput from '../../../ui/PhoneInput'
import FormSectionTitle from '../../../ui/FormSectionTitle'
import ContactsTableEditMode from '../../../ui/ContactsTableEditMode'

export default function EditForm() {
    //Phone Inputs
    const [phones, setPhones] = useState(["123-456-7890", "123-456-7890"]);
    const [sailingMPhone, setSMPhone] = useState("123-456-7890");
    const labels = ["Phone # 1", "Phone # 2"];

    const handlePhoneChange = (value, index) => {
        const updatedPhones = [...phones];
        updatedPhones[index] = value;
        setPhones(updatedPhones);
    };

    const handleSMPhoneChange = (value) => {
        setSMPhone(value);
    };

    //Table Data
    const headers = ["Name", "Role", "Phone #", "Email Address"];

    const [data, setData] = useState([
        { name: 'John Doe', role: 'Admin', phone: '123-456-7890', email: 'john@example.com' },
        { name: 'Jane Smith', role: 'Editor', phone: '123-456-7890', email: 'jane@example.com' },
        { name: 'John Doe', role: 'Member', phone: '123-456-7890', email: 'john@example.com' }
    ]);

    //Update Phone
    const handleInputChange = (newValue, rowIndex, field) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[rowIndex][field] = newValue;
            return newData;
        });
    };

    //Update Role
    const handleRoleChange = (newRole, rowIndex) => {
        const newData = [...data];
        newData[rowIndex].role = newRole;
        setData(newData);
        console.log(newData)
    };

    //Remove Row
    const handleRowRemove = (rowIndex) => {
        setData(prevData => {
            const newData = [...prevData];
            newData.splice(rowIndex, 1);
            console.log(newData);
            return newData;
        });
    };

    //Add row
    const handleAddRow = () => {
        const newRow = { name: '', role: 'Admin', phone: '', email: '' };
        setData([...data, newRow]);
    };
    return (
        <>
            <GridRow container spacing={4} justifyContent="space-between">
                <Grid item md={3}>
                    <FormLabel htmlFor="clubName" isRequired={true}>
                        Club Name
                    </FormLabel>
                    <StyledInputBase id="clubName" value="Northstar Club" />
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
                    <FormLabel isRequired={true}>Sailing Manager Contact</FormLabel>
                    <CustomPhoneInput defaultCountry="us" isRequired={true} value={sailingMPhone} onChange={(value) => handleSMPhoneChange(value)} />
                </Grid>
            </GridRow>
            <GridRow container spacing={4}>
                {phones.map((phone, index) => (
                    <Grid item md={3} key={index}>
                        <FormLabel isRequired={true}>{labels[index]}</FormLabel>
                        <CustomPhoneInput key={index} defaultCountry="us" value={phone} onChange={(value) => handlePhoneChange(value, index)} />
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
            <ContactsTableEditMode headers={headers} data={data} onInputChange={handleInputChange} onRowRemove={handleRowRemove} onAddRow={handleAddRow} onRoleChange={handleRoleChange} />
        </>
    )
}
