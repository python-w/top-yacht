import styled from "styled-components"
import { mediaQueries } from "../utils/Helpers"

const Button = styled.button`    
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    background: var(--primary-color);
    border-radius: 36px;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.07);
    
    border: 0;
    cursor: pointer;
    color: #fff;
    display: inline-flex;
    align-items: center;
    @media (min-width: ${mediaQueries.xs}px) {
        font-size: 12px;
        padding: 8px 10px;
    }
    @media (min-width: ${mediaQueries.md}px) {
        font-size: 14px;
        padding: 12px 20px;
    }
    svg{
        font-size: 130%;
        margin-right: 6px;
    }
    &:hover{
        background: #2B598D;
    }
    &:active{
        background: #2B598D;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.20);
    }
`

export default function ButtonPrimary({ children, onClick }) {
    return (
        <Button role="button" onClick={onClick}>{children}</Button>
    )
}
