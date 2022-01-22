import { Box, List, ListItem, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { PagedApiResponseData } from "../../Types/App/Types";
import { UserView } from "../../Types/api";
import Pagination from "../Pagination/Pagination";

export default function UserList({
  data,
  loading,
  getUsers,
  setSelectedUser
}: {
  data?: PagedApiResponseData<UserView>;
  loading: boolean;
  getUsers: any;
  setSelectedUser:any;
}) {
  console.log(data);
  return (
    <VStack spacing={4} alignSelf="flex-start">  
      <VStack alignItems="flex-start" bg="white" width="210px" height="80vh" alignSelf="flex-start">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="Search"
            variant="flushed"
            name="search"
            onChange={(e) => console.log(e)}
          />
        </InputGroup>
        <List>
          {data?.value.map((user: UserView, index: number) => {
            return (
              <ListItem borderBottom="1px" borderColor={"gray.200"} key={index} onClick={() => {setSelectedUser(user)}}>
                <Box width="210px">
                  <Text
                    fontSize="xs"
                    fontWeight="base"
                    px="5"
                    py="2"
                    _hover={{
                      bg: "primary",
                      color: "white",
                      fontWeight: "bolder",
                    }}
                  >
                    {user.fullName}
                  </Text>
                </Box>
              </ListItem>
            );
          })}
          {loading && (
            <ListItem borderBottom="1px" borderColor={"gray.200"}>
              <Box width="210px">
                <Text
                  fontSize="base"
                  fontWeight="base"
                  p="3"
                  _hover={{
                    bg: "primary",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  Loading...
                </Text>
              </Box>
            </ListItem>
          )}
        </List>
      </VStack>
      <Pagination data={data} getData={getUsers} />
    </VStack>
  );
}
