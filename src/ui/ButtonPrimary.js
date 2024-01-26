import styled from "styled-components"

const Button = styled.button`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    background: var(--primary-color);
    border-radius: 36px;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.07);
    padding: 12px 20px;
    border: 0;
    cursor: pointer;
    color: #fff;
    display: inline-flex;
    align-items: center;
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
