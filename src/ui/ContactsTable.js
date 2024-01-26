import StyledInputBase from './InputBase';
import FormSelect from './FormSelect';
import CustomPhoneInput from './PhoneInput';
import TimesButton from './TimesButton';
import { FlagImage } from 'react-international-phone';
import CustomTable from './CustomTable';


export default function ContactsTable({ headers, data, isEditMode, onInputChange, onRowRemove, options, handlePhoneChange, handleRoleChange }) {

    return (

        <CustomTable headers={headers}>
            {isEditMode ?
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
                :
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.entries(row).map(([key, cell], cellIndex) => (
                                <td key={cellIndex}>
                                    {key === 'phone' ? (
                                        <>
                                            <div><FlagImage iso2="us" size="24px" /> {cell}</div>
                                        </>
                                    ) : (
                                        <div>{cell}</div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            }
        </CustomTable>
    )
}
