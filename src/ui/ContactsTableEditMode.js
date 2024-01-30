import styled from 'styled-components'
import ContactsTable from './ContactsTable';
import { Button } from '@mui/material';
import { get4k, mediaQueries } from '../utils/Helpers';

const TableOuter = styled.div` 
    border-radius: 16px;
    background: #F1F7F9;
    @media (min-width: ${mediaQueries.xxxl}px) {
        border-radius: ${get4k(16)}
    }
`
const BtnHolder = styled.div`
    padding: 0 24px 24px;
    @media (min-width: ${mediaQueries.xxxl}px) {
        padding: 0 ${get4k(24)} ${get4k(24)}
    }
`
const AddButton = styled(Button)`
    &.MuiButton-root {
        color: var(--primary-color);
        width: 100%;
        border: 1px dashed #356DAD;
        background: #FFF;
        box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.07);
    }
`

export default function ContactsTableEditMode({ headers, data, onInputChange, onRowRemove, onAddRow, isEditMode }) {

    const handlePhoneChange = (value, rowIndex) => {
        onInputChange(value, rowIndex, 'phone');
    };

    const options = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Member', label: 'Member' }
    ];

    const handleRoleChange = (selectedOption, rowIndex) => {
        onInputChange(selectedOption.value, rowIndex, 'role');
    };

    return (
        <TableOuter>
            <ContactsTable headers={headers} data={data} isEditMode={isEditMode} handlePhoneChange={handlePhoneChange} onRowRemove={onRowRemove} handleRoleChange={handleRoleChange} options={options} onInputChange={onInputChange} />
            <BtnHolder>
                <AddButton onClick={onAddRow}>Add additional Contacts</AddButton>
            </BtnHolder>
        </TableOuter>
    )
}
