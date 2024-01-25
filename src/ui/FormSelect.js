import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";


const StyledSelect = styled(Select)`
    &.css-xwomp5-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
    font-family: inherit;
    font-size: inherit;
     width: 100%;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    height: 41px;
    color: var(--body-text-color);
    background: #fff;
    .MuiOutlinedInput-notchedOutline{
        border: 0;
    }
    &:hover .MuiOutlinedInput-notchedOutline{
        border-color: inherit;
    }
    &.Mui-focused{
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(53, 109, 173, 0.20)
    }
    }   
`
export default function FormSelect({ options, selected }) {
    const [role, setRole] = useState('');

    const handleChangeSites = (event) => {
        setRole(event.target.value);
    };

    useEffect(() => {
        if (role) {
            console.log(role);
        }
    }, [role, selected]);

    return (
        <StyledSelect
            value={role}
            onChange={handleChangeSites}
            displayEmpty
        >
            <MenuItem value="">
                {selected}
            </MenuItem>
            {options.map((option, index) => option.label !== selected && <MenuItem key={index} value={option.value}>{option.label}</MenuItem>)}
        </StyledSelect>

    );
}
