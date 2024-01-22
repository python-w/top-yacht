import { Box } from "@mui/material";

export default function PageHeader({ title }) {
    return (
        <Box>
            <Box component="span" sx={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-color)', padding: '20px 32px', background: '#fff', display: 'inline-block' }}>{title}</Box>
        </Box >
    )
}
