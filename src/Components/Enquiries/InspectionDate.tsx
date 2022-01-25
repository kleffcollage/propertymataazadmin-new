import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Heading,
  SimpleGrid,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Moment from "react-moment";
import { Text } from "@chakra-ui/layout";
import {
  InspectionDateView,
  InspectionTimeView,
  InspectionView,
} from "../../Types/api";
import DeleteModal from "../Generics/DeleteModal";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";
import AddTimeModal from "./AddTimeModal";

export default function InspectionDate({
  inspection,
  list,
}: {
  inspection: InspectionDateView;
  list: () => void;
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTime,
    onOpen: onOpenTime,
    onClose: onCloseTime,
  } = useDisclosure();
  const [deleteInspectionDate, { loading, data, error }] = useOperationMethod(
    "Propertyinspectiondatesdelete{id}"
  );

  const deleteDate = async () => {
    const params: Parameters = {
      id: inspection.id as number,
    };
    const result = await deleteInspectionDate(params);
    if (result.data.status) {
      toast({
        title: "Date deleted.",
        description: "The date has been deleted successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      list();
      onClose();
      return;
    }
    toast({
      title: "Delete UnSuccessful",
      description: result.data.message,
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
    return;
  };

  return (
    <>
      <AddTimeModal isOpen={isOpenTime} onClose={onCloseTime} />

      <DeleteModal
        isOpen={isOpen}
        loading={loading}
        onDelete={async () => await deleteDate()}
        onClose={onClose}
        name="Inspection Date"
      />
      <Box boxShadow="base" width="90%" minHeight={"100px"}>
        <VStack width="100%" alignItems="flex-start">
          <Heading size="sm" m="3">
            <Moment format="ll">{new Date(inspection?.date as string)}</Moment>
          </Heading>
          <SimpleGrid columns={4} spacingX="10px" p={3}>
            {inspection?.times?.map((item: InspectionTimeView) => {
              return (
                <Box bg="gray.200" borderRadius="base" p={1} my={1}>
                  <Text fontSize="sm" fontWeight="bold">
                    <Moment format="LT">{new Date(item.time as string)}</Moment>{" "}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
          <HStack p={3} width="100%" justifyContent="space-between">
            <Button
              size="xs"
              bg={"transparent"}
              borderRadius="sm"
              border="1px"
              borderColor="grey.800"
              onClick={() => onOpenTime()}
            >
              <Text as="span" ml={2}></Text>Add Time slot
            </Button>

            <IconButton
              variant="transparent"
              colorScheme="gray"
              aria-label="Delete timeslot"
              onClick={() => onOpen()}
              icon={<DeleteIcon />}
            />
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
