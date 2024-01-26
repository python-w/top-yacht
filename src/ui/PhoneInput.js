import 'react-international-phone/style.css';
import { PhoneInput } from "react-international-phone";
import styled from 'styled-components';

const StyledPhoneInput = styled(PhoneInput)`
    position: relative;    
    .react-international-phone-country-selector{
        display: inline-flex;
        align-items: center;
        position: absolute;
        height: 100%;
    }
    button.react-international-phone-country-selector-button{
        border: 0;
        background: transparent;
        padding: 0 7px;
        position: relative;
    &::after{
        content: '';
        width: 1px;
        height: 12px;
        display: inline-block;
        background: #D9D9D9;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        }
    }
    input.react-international-phone-input{
        width: 100%;
        font-size: inherit;
        color: inherit;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        background: no-repeat;
        padding-left: 68px;
        height: 41px;
        font-size: 16px;
        background: #fff;
        &:focus{
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(53, 109, 173, 0.20)
        }
    }
`

const CustomPhoneInput = ({ value, onChange, defaultCountry }) => {
    return (
        <div>
            <StyledPhoneInput
                defaultCountry={defaultCountry}
                value={value}
                onChange={(phone) => onChange(phone)}
            />
        </div>
    );
};

export default CustomPhoneInput;