import { Box } from "@mui/material";

export default function PageBody({ children }) {
    return (
        <Box className="page_inner" sx={{ background: '#fff', overflow: 'auto', padding: '24px 32px' }}>{children}</Box>
    )
}
