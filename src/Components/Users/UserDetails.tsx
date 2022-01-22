import { Avatar } from "@chakra-ui/avatar";
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

import React from "react";
import { UserView } from "../../Types/api";
import ListCard from "../Properties/ListCard";

export default function UserDetails({
  user,
}: {
  user?: UserView;
}): JSX.Element {
  return (
    <VStack
      alignItems="flex-start"
      bg="white"
      p="5"
      width="100%"
      height="100%"
      spacing="5"
    >
      <HStack>
        <Avatar
          src="https://bit.ly/2X3qQZH"
          size="lg"
          bg="primary"
          name="Peter Omotosho"
        />
        <Heading as="h1" size="lg">
          Peter Omotosho
        </Heading>
      </HStack>
      <Tabs variant="enclosed" width="100%">
        <TabList>
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
            Profile
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
            Settings
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack justifyContent="flex-start" spacing="20" width="90%" pr="10" alignItems="flex-start" alignSelf="flex-start">
              <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      First Name
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.firstName}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Surname
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.lastName}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Email
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.email}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Mobile Number
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.phoneNumber}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Address
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.address}
                    </Text>
                  </VStack>
                </Box>
              </VStack>
              <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      All-time RentRelief
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      N/A
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Current RentRelief
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      N/A
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Total Listings
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      {user?.properties?.length}
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Total Sales
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      N/A
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Total Purchases
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      N/A
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      AActive Tenancy
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      N/A
                    </Text>
                  </VStack>
                </Box>
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      Total Sessions
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      0
                    </Text>
                  </VStack>
                </Box>
              </VStack>
              {/* Active account column */}
              {/* <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Box>
                  <VStack alignItems="flex-start" spacing={1}>
                    <Text fontSize="sm" fontWeight="bold" color="gray">
                      First Name
                    </Text>
                    <Text fontSize="base" fontWeight="bold" color="black">
                      Peter
                    </Text>
                  </VStack>
                </Box>
                
              </VStack> */}
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack justifyContent="space-between" width="90%" pr="10">
              <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Heading as="h2" fontSize="xl" fontWeight="bold" color="black">
                  For Sale
                </Heading>
                {user?.properties?.filter(p => p.isForSale).map((property, index) => {
                  return <ListCard property={property} key={index} />;
                })}
              </VStack>
              <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Heading as="h2" fontSize="xl" fontWeight="bold" color="black">
                  For Rent
                </Heading>
                {user?.properties?.filter(p => p.isForRent).map((property, index) => {
                  return <ListCard property={property} key={index} />;
                })}
              </VStack>
              <VStack
                alignItems="flex-start"
                spacing="6"
                alignSelf="flex-start"
              >
                <Heading as="h2" fontSize="xl" fontWeight="bold" color="black">
                  Drafts
                </Heading>
                {user?.properties?.filter(p => p.isDraft).map((property, index) => {
                  return <ListCard property={property} key={index} />;
                })}
              </VStack>
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack justifyContent="space-between" width="90%" pr="10">
              
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
