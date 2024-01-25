import styled from 'styled-components'
import StyledInputBase from './InputBase'
import CustomPhoneInput from './PhoneInput'
import TimesButton from './TimesButton'
import FormSelect from './FormSelect'


const TableOuter = styled.div`
    padding: 0 24px;
    border-radius: 16px;
    background: #F1F7F9;
`

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 12px;
    thead{
        text-align: left;
        th{
            padding: 10px 24px;
        }
    }
    tbody{
        tr{
            &:nth-child(even){
                td{
                    background: #D8E9EE;
                }
            }
        }
        td{
            padding: 10px 24px;
            background: #fff;
						width: 25%;
            &:first-child{
                border-top-left-radius: 48px;
                border-bottom-left-radius: 48px;
            }
            &:last-child{
                border-top-right-radius: 48px;
                border-bottom-right-radius: 48px;
            }
        }
    }
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
    margin: 16px 0 24px 0; 
    cursor: pointer;
`

export default function ContactsTableEditMode({ headers, data, onInputChange, onRowRemove, onAddRow, onRoleChange }) {

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
            <Table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td><StyledInputBase type="text" value={row.name} onChange={(e) => onInputChange(e.target.value, rowIndex, 'name')} /></td>
                            <td><FormSelect options={options} selected={row.role} onChange={(selectedOption) => handleRoleChange(selectedOption, rowIndex)} /></td>
                            <td><CustomPhoneInput value={row.phone} onChange={(value) => handlePhoneChange(value, rowIndex)} /></td>
                            <td><StyledInputBase type="text" value={row.email} onChange={(e) => onInputChange(e.target.value, rowIndex, 'email')} /></td>
                            <td><TimesButton onClick={() => onRowRemove(rowIndex)}>&times;</TimesButton></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <AddButton onClick={onAddRow}>Add additional Contacts</AddButton>
        </TableOuter>
    )
}
