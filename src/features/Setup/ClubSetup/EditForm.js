import React, { useState } from 'react'
import { GridRow } from '../../../ui/GridRow'
import { Box, Checkbox, Divider, FormControlLabel, Grid, Switch, Typography, FormLabel } from '@mui/material'
import StyledInputBase from '../../../ui/InputBase'
import CustomPhoneInput from '../../../ui/PhoneInput'
import FormSectionTitle from '../../../ui/FormSectionTitle'
import ContactsTableEditMode from '../../../ui/ContactsTableEditMode'

export default function EditForm({ isEditMode }) {

    const [clubName, setClubName] = useState('Northstar Club')

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
        { name: 'John Doe', role: 'Admin', phone: '+1 (234) 567-890', email: 'john@example.com' },
        { name: 'Jane Smith', role: 'Admin', phone: '+1 (234) 567-890', email: 'jane@example.com' },
        { name: 'Oliver Simp', role: 'Admin', phone: '+1 (234) 567-890', email: 'oliver@example.com' }
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
    };

    //Remove Row
    const handleRowRemove = (rowIndex) => {
        setData(prevData => {
            const newData = [...prevData];
            newData.splice(rowIndex, 1);
            return newData;
        });
    };

    //Add row
    const handleAddRow = () => {
        const newRow = { name: '', role: 'Member', phone: '', email: '' };
        setData([...data, newRow]);
    };
    return (
        <>
            <GridRow container spacing={4} justifyContent="space-between">
                <Grid item md={3}>
                    <FormLabel htmlFor="clubName">
                        Club Name<Typography className='required' component="span">*</Typography>
                    </FormLabel>
                    <StyledInputBase id="clubName" value={clubName} onChange={(e) => setClubName(e.target.value)} />
                </Grid>
                <Grid item>
                    <FormLabel htmlFor="arch">
                        Archive<Typography className='required' component="span">*</Typography>
                    </FormLabel>
                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Enabled</Typography>} />
                </Grid>
            </GridRow>
            <GridRow container spacing={4}>
                <Grid item md={3}>
                    <FormLabel htmlFor="clubType">
                        Type<Typography className='required' component="span">*</Typography>
                    </FormLabel>
                    <Box xs={{ gap: "25px" }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="KB" />
                        <FormControlLabel control={<Checkbox />} label="OTB" />
                        <FormControlLabel control={<Checkbox />} label="Other" />
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <FormLabel htmlFor="clubType">
                        Staff<Typography className='required' component="span">*</Typography>
                    </FormLabel>
                    <Box xs={{ gap: "25px" }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Fully Volunteer Run Club" />
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <FormLabel htmlFor="clubType">
                        Source of Entrants<Typography className='required' component="span">*</Typography>
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
                    <FormLabel>Sailing Manager Contact<Typography className='required' component="span">*</Typography></FormLabel>
                    <CustomPhoneInput defaultCountry="us" value={sailingMPhone} onChange={(value) => handleSMPhoneChange(value)} />
                </Grid>
            </GridRow>
            <GridRow container spacing={4}>
                {phones.map((phone, index) => (
                    <Grid item md={3} key={index}>
                        <FormLabel>{labels[index]}<Typography className='required' component="span">*</Typography></FormLabel>
                        <CustomPhoneInput key={index} defaultCountry="us" value={phone} onChange={(value) => handlePhoneChange(value, index)} />
                    </Grid>
                ))}
                <Grid item md={3}>
                    <FormLabel htmlFor="clubName">
                        Email Address<Typography className='required' component="span">*</Typography>
                    </FormLabel>
                    <StyledInputBase id="clubName" placeholder="e.g abc@email.com" />
                </Grid>
            </GridRow>
            <Divider sx={{ my: 4 }} />
            <FormSectionTitle>Other Contacts</FormSectionTitle>
            <ContactsTableEditMode isEditMode={isEditMode} headers={headers} data={data} onInputChange={handleInputChange} onRowRemove={handleRowRemove} onAddRow={handleAddRow} onRoleChange={handleRoleChange} />
        </>
    )
}
