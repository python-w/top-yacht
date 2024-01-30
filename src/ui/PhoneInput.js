import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import styled from "styled-components";
import { get4k, mediaQueries } from "../utils/Helpers";

const StyledPhoneInput = styled(PhoneInput)`
  position: relative;
  .react-international-phone-country-selector {
    display: inline-flex;
    align-items: center;
    position: absolute;
    height: 100%;
  }
  .react-international-phone-country-selector-button__dropdown-arrow{
    margin-right: 0;
    margin-left: 4px;
  }
  button.react-international-phone-country-selector-button {
    border: 0;
    background: transparent;
    padding: 0 7px;
    position: relative;
    @media (min-width: ${mediaQueries.xxxl}px) {
        padding: 0 ${get4k(7)};
    }
    &::after {
      content: "";
      width: 1px;
      height: 12px;
      display: inline-block;
      background: #d9d9d9;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      @media (min-width: ${mediaQueries.xxxl}px) {
        height: ${get4k(12)}
      }
    }
  }
  input.react-international-phone-input {
    width: 100%;
    color: inherit;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: no-repeat;
    padding-left: 68px;
    height: 41px;
    font-size: 16px;
    background: #fff;
    @media (min-width: ${mediaQueries.xxxl}px) {
        height: ${get4k(41)};
        padding-left: ${get4k(68)};
        font-size: ${get4k(16)};
        border-radius: ${get4k(12)};
    }
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(53, 109, 173, 0.2);
    }
  }
`;

const CustomPhoneInput = ({ value, onChange, defaultCountry }) => {
  return (
    <div>
      <StyledPhoneInput defaultCountry={defaultCountry} value={value} onChange={(phone) => onChange(phone)} />
    </div>
  );
};

export default CustomPhoneInput;
