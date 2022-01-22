import React from 'react';
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  color,
  Text,
} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'

export default function ListingTabs({ children }: { children: React.ReactNode }) {
    return (
        <VStack
            alignItems="flex-start"
            bg="white"
            p="5"
            width="100%"
            height="100%"
            spacing="5"
        >
            <Tabs variant="enclosed" width="100%">
                <TabList>
                    <Tab
                        _selected={{
                            color: "white",
                            background: "brand.grey",
                            border: "0",
                        }}
                        borderTopRightRadius="3xl"
                        background="brand.grey"
                        width="230px"
                        alignItems="flex-start"
                        justifyContent="space-between"
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <ArrowDownIcon w={6} h={6} color="gray.800" />
                            <Box display="flex" alignItems="center" justifyContent="space-between" w={150}>
                                <Text fontSize="md" color="gray.800" fontWeight="bold">Enquiries</Text>
                                <Box w={50} borderRadius="50" bg="blue" color="white"> 0 </Box>
                            </Box>
                        </Box>
                    </Tab>
                    <Tab
                        _selected={{
                            color: "white",
                            background: "brand.grey",
                            border: "0",
                        }}
                        borderTopRightRadius="3xl"
                        background="brand.grey"
                        width="230px"
                        alignItems="flex-start"
                        justifyContent="space-between"
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <ArrowDownIcon w={6} h={6} color="gray.800" />
                            <Box display="flex" alignItems="center" justifyContent="space-between" w={150}>
                                <Text fontSize="md" color="gray.800" fontWeight="bold">Requests</Text>
                                <Box w={50} borderRadius="50" bg="blue" color="white"> 0 </Box>
                            </Box>
                        </Box>
                    </Tab>
                    
                    <Tab
                        _selected={{
                        color: "white",
                        background: "brand.blue",
                        border: "0",
                        }}
                        borderTopRightRadius="3xl"
                        background="brand.grey"
                        width="100px"
                    >
                        Listings
                    </Tab>
                </TabList>
                
                <TabPanels>
                    { children }
                </TabPanels>
            </Tabs>
        </VStack>
    )
}