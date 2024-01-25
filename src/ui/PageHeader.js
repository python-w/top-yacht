import { Box } from "@mui/material";
import unionSvg from '../images/union.svg';
import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";

const StyledBox = styled(Box)`
    position: relative;
    img{
        position: absolute;
        top: 0;
        left: 100%;
        height: 100%;
        width: auto;
    }
`

export default function PageHeader({ title, btnText, hasBtn }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: hasBtn && '62px' }}>
            <StyledBox component="span" sx={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-color)', padding: '20px 32px', background: '#fff', display: 'inline-block', letterSpacing: '2.4px' }}>{title} <img src={unionSvg} alt="icon" /></StyledBox>
            {hasBtn && <ButtonPrimary>{btnText}</ButtonPrimary>}
        </Box >
    )
}
