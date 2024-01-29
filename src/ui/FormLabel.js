import { FormLabel, Typography } from '@mui/material';

export default function FormLabelComponent({ children, isRequired, htmlFor }) {
  return (
    <FormLabel htmlFor={htmlFor}>{children}{isRequired && <Typography className='required' component="span">*</Typography>}</FormLabel>
  )
}
