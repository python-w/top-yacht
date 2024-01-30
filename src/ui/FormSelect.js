import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

export default function FormSelect({ options, selected }) {
  const [role, setRole] = useState("");

  const handleChangeSites = (event) => {
    setRole(event.target.value);
  };

  useEffect(() => {
    if (role) {
      console.log(role);
    }
  }, [role, selected]);

  return (
    <Select value={role} onChange={handleChangeSites} displayEmpty>
      <MenuItem value="">{selected}</MenuItem>
      {options.map(
        (option, index) =>
          option.label !== selected && (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          )
      )}
    </Select>
  );
}
