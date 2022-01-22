import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Checkbox,    
    CheckboxGroup,
    Box
} from '@chakra-ui/react'

function TableWithCheck() {
    return (
        <Box display="table">
            <Table variant='simple'>
                <Thead>
                    <Tr bg="gray" p="2">
                        <Th>
                            <Checkbox />
                        </Th>
                        <Th>User</Th>
                        <Th>Amount</Th>
                        <Th>Type</Th>
                        <Th>Service</Th>
                        <Th>Recipient</Th>
                        <Th>Provider</Th>
                        <Th>Channel</Th>
                        <Th>Time</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
            
                <Tbody>
                    <Tr>
                        <Td><Checkbox /></Td>
                        <Td>Pade Omotosho</Td>
                        <Td>2,500,000</Td>
                        <Td>Pay Rent</Td>
                        <Td>Rent</Td>
                        <Td>PropertyMataaz</Td>
                        <Td>Flutterwave</Td>
                        <Td>Card</Td>
                        <Td>4:00PM</Td>
                        <Td>Successful</Td>
                    </Tr>
                    <Tr>
                        <Td><Checkbox /></Td>
                        <Td>Pade Omotosho</Td>
                        <Td>2,500,000</Td>
                        <Td>Pay Rent</Td>
                        <Td>Rent</Td>
                        <Td>PropertyMataaz</Td>
                        <Td>Flutterwave</Td>
                        <Td>Card</Td>
                        <Td>4:00PM</Td>
                        <Td>Successful</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

export default TableWithCheck;