import { styled } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: '16px',
  color: 'inherit',
  width: '100%',
  height: 40,
  '& .MuiInputBase-input': {
    backgroundColor: "#fff",
    padding: theme.spacing(1, 1.5),
    border: '1px solid var(--border-color)',
    // vertical padding + font size from searchIcon    
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      borderRadius: '12px',
      '&:focus': {
        width: '100%',
        borderColor: 'var(--primary-color)',
        boxShadow: '0 0 0 2px rgba(53, 109, 173, 0.20)'
      },
    },
  },
}));

export default StyledInputBase;