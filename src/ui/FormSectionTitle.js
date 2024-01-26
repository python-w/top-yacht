import styled from "styled-components"

const SectionTitle = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 32px;
`

export default function FormSectionTitle({ children }) {
    return (
        <SectionTitle>{children}</SectionTitle>
    )
}
