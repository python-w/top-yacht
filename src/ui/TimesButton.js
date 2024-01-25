import styled from "styled-components"

const Times = styled.button`
    background: transparent;
    border: 0;
    font-size: 175%;
    font-weight: normal;
    color: var(--primary-color);
    cursor: pointer;
`

export default function TimesButton({ onClick }) {
    return (
        <Times onClick={onClick}>&times;</Times>
    )
}
