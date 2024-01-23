import React from 'react'
import styled from 'styled-components'

const TableOuter = styled.div`
    width: 100%;
    overflow-x: auto;
    padding: 16px 24px;
    padding-top: 0;
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
            background: #fff;
        }
        td{
            padding: 10px 24px;
            &:first-child{
                border-top-left-radius: 48px;
                border-bottom-left-radius: 48px;
            }
        }
    }
`

export default function CustomTable({ headers, data }) {
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
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}><div>{cell}</div></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableOuter>
    )
}
