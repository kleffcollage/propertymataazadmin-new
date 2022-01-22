import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { HStack,Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MainContext } from "../../Contexts/MainContext";

export default function TopNav() {
  const {
    data: { user },
  } = useContext(MainContext);
  return (
    <HStack justify="space-between" width="100%" py="3" px="10" boxShadow="base" bg="white">
      <Box>
        <Heading as="h1" fontSize="xl">Dashboard</Heading>
      </Box>
      <Box>
        <HStack>
          <Text >{`Hi, ${user?.firstName}`}</Text>
          <Avatar
            name={user?.fullName ?? "user's name"}
            bg="primary"
            color="white"
            src={user?.profilePicture ?? "https://bit.ly/broken-link"}
          />
        </HStack>
      </Box>
    </HStack>
  );
}
