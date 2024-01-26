import styled from "styled-components"

const TableOuter = styled.div`
    padding: 0 24px 12px 24px;
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
            font-size: 14px;
            text-transform: uppercase;
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
            font-weight: 500;
            padding: 10px 24px;
            background: #fff;
            width: 25%;
            div{
                display: flex;
                align-items:center;
                &.react-international-phone-input-container{
                    width: 100%;
                }
                img{
                    margin-right: 12px;
                }
            }
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

export default function CustomTable({ headers, children }) {
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
                {children}
            </Table>
        </TableOuter>
    )
}
