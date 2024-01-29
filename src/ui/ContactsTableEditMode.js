import styled from 'styled-components'
import ContactsTable from './ContactsTable';

const TableOuter = styled.div` 
    border-radius: 16px;
    background: #F1F7F9;
`
const BtnHolder = styled.div`
    padding: 0 24px 24px;
`
const AddButton = styled.button`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--primary-color);
    width: 100%;
    border-radius: 36px;
    border: 1px dashed #356DAD;
    background: #FFF;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.07);
    padding: 12px 18px;
    cursor: pointer;
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
