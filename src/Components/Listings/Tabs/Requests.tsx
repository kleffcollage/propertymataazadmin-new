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
    Box,
    InputGroup, Input, InputLeftElement 
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";


function RequestsTable() {
    return (
        <Box display="flex" flexDirection="column">
            <InputGroup w={280} border="2px" borderColor="gray.700" borderRadius="base" my={3}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.800" />}
                />
                <Input
                    placeholder="Search"
                    variant="flushed"
                    name="search"
                    onChange={(e) => console.log(e)}
                    borderBottom="none"
                    _placeholder={{ color: 'gray.800' }}
                />
            </InputGroup>
            <Table variant='simple'>
                <Thead>
                    <Tr bg="gray.200" p="2">
                        <Th>Type</Th>
                        <Th>User</Th>
                        <Th>State</Th>
                        <Th>Locality</Th>
                        <Th>Area</Th>
                        <Th>Budget</Th>
                        <Th>Matching Status</Th>
                    </Tr>
                </Thead>
            
                <Tbody>
                    <Tr>
                        <Td>4 Bedroom Terrace</Td>
                        <Td>Pade Omotosho</Td>
                        <Td>Lagos</Td>
                        <Td>Lekki</Td>
                        <Td>Sangotedo</Td>
                        <Td>400000</Td>
                        <Td>Pending</Td>
                    </Tr>
                    <Tr>
                        <Td>4 Bedroom Terrace</Td>
                        <Td>Pade Omotosho</Td>
                        <Td>Lagos</Td>
                        <Td>Lekki</Td>
                        <Td>Sangotedo</Td>
                        <Td>400000</Td>
                        <Td>Pending</Td>
                    </Tr>
                    <Tr>
                        <Td>4 Bedroom Terrace</Td>
                        <Td>Pade Omotosho</Td>
                        <Td>Lagos</Td>
                        <Td>Lekki</Td>
                        <Td>Sangotedo</Td>
                        <Td>400000</Td>
                        <Td>Pending</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

export default RequestsTable;