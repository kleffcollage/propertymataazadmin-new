import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import React from "react";
import { UserView } from "../../Types/api";
import ListCard from "../Properties/ListCard";
import { AddIcon } from "@chakra-ui/icons";
import DeleteModal from "../Generics/DeleteModal";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";
import AddAdminModal from "./AddAdminModal";
import { useNavigate } from "react-router-dom";

export default function AdminDetails({ user }: { user?: UserView }) {
  const toast = useToast();
  const navigation = useNavigate();
  const [deleteAdmin, { loading, data, error }] =
    useOperationMethod("Admindelete{email}");
  const {
    isOpen: deleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const {
    isOpen: addOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const deleteUser = async () => {
    const params: Parameters = {
      email: user?.email as string,
    };
    const result = await deleteAdmin(params);
    if (result.data.status) {
      toast({
        title: "Delete Successful",
        description: "The admin account has been deleted",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      onDeleteClose();
      window.location.reload();
      return;
    }
    toast({
      title: "Delete UnSuccessful",
      description: "The was an error deleting this account",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      <DeleteModal
        name="admin"
        isOpen={deleteOpen}
        onClose={onDeleteClose}
        loading={loading}
        onDelete={() => deleteUser()}
      />
      <AddAdminModal
        isOpen={addOpen}
        onClose={onAddClose}
        onAddAdmin={() => {}}
      />
      <VStack
        alignItems="flex-start"
        bg="white"
        p="5"
        width="100%"
        height="100%"
        spacing="5"
      >
        <HStack justifyContent="space-between" w={"100%"}>
          <HStack>
            <Avatar
              name={user?.fullName ?? "user's name"}
              bg="primary"
              color="white"
              src={user?.profilePicture ?? "https://bit.ly/broken-link"}
            />
            <Heading as="h1" size="lg">
              {user?.fullName}
            </Heading>
          </HStack>
          <Box>
            <Button
              icon={<AddIcon />}
              variant="solid"
              type="submit"
              colorScheme="blue"
              bg="primary"
              onClick={onAddOpen}
            >
              <AddIcon /> <Text ml={3}>Add New Admin</Text>
            </Button>
          </Box>
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
              width="150px"
            >
              Permissions
            </Tab>
            <Tab
              _selected={{
                color: "white",
                background: "brand.blue",
                border: "0",
              }}
              borderTopRightRadius="3xl"
              background="brand.grey"
              width="150px"
            >
              Representatives
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack
                justifyContent="flex-start"
                spacing="20"
                width="90%"
                pr="10"
                alignItems="flex-start"
                alignSelf="flex-start"
              >
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
                  <Button
                    icon={<AddIcon />}
                    variant="outline"
                    type="submit"
                    colorScheme="black"
                    onClick={onDeleteOpen}
                  >
                    <Text>Delete Admin</Text>
                  </Button>
                </VStack>
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack justifyContent="space-between" width="90%" pr="10">
                <VStack
                  alignItems="flex-start"
                  spacing="6"
                  alignSelf="flex-start"
                >
                  <Heading
                    as="h2"
                    fontSize="xl"
                    fontWeight="bold"
                    color="black"
                  >
                    For Sale
                  </Heading>
                  {user?.properties
                    ?.filter((p) => p.isForSale)
                    .map((property, index) => {
                      return <ListCard property={property} key={index} />;
                    })}
                </VStack>
                <VStack
                  alignItems="flex-start"
                  spacing="6"
                  alignSelf="flex-start"
                >
                  <Heading
                    as="h2"
                    fontSize="xl"
                    fontWeight="bold"
                    color="black"
                  >
                    For Rent
                  </Heading>
                  {user?.properties
                    ?.filter((p) => p.isForRent)
                    .map((property, index) => {
                      return <ListCard property={property} key={index} />;
                    })}
                </VStack>
                <VStack
                  alignItems="flex-start"
                  spacing="6"
                  alignSelf="flex-start"
                >
                  <Heading
                    as="h2"
                    fontSize="xl"
                    fontWeight="bold"
                    color="black"
                  >
                    Drafts
                  </Heading>
                  {user?.properties
                    ?.filter((p) => p.isDraft)
                    .map((property, index) => {
                      return <ListCard property={property} key={index} />;
                    })}
                </VStack>
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack
                justifyContent="space-between"
                width="90%"
                pr="10"
              ></HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
