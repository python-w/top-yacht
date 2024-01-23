import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: var(--body-text-color);
  margin-bottom: 8px;
  text-transform: uppercase;

  span {
    color: red;
    display: inline-block;
    margin-left: 8px;
  }
`

export default function FormLabel({ children, isRequired, htmlFor }) {
  return (
    <Label htmlFor={htmlFor}>{children}{isRequired && <span>*</span>}</Label>
  )
}
