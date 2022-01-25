import { Button, Icon, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { UserEnquiryView } from "../../Types/api/user-enquiry-view";
import { Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { ChevronLeftIcon, DeleteIcon, EmailIcon } from "@chakra-ui/icons";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Moment from "react-moment";
import InspectionDate from "./InspectionDate";
import { InspectionDateView, InspectionView } from "../../Types/api";
import AddDateModal from "./AddDateModal";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";

export default function EnquiryDetails({
  enquiry,
  goBack
}: {
  enquiry: UserEnquiryView | undefined;
  goBack: any;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [getInspectionDates,{ loading, data, error}] = useOperationMethod("Propertyinspectiondateslist{PropertyId}")

    const listInspectionDates = async () => {
        const params:Parameters = {
            PropertyId: enquiry?.propertyId as number
        }
        await getInspectionDates(params)
    }

    useEffect(() => {
        listInspectionDates();
    }, [])
  return (
      <>
      <AddDateModal
      isOpen={isOpen}
        onClose={onClose}
        propertyId={enquiry?.propertyId}
        reload={() => listInspectionDates()}
      />
    <VStack width="100%" alignItems="flex-start">
      <HStack marginTop={4}>
        <IoIosArrowBack size="28px" onClick={goBack}/>
        <Heading as="h4" size="lg" pl={4}>
          {enquiry?.propertyName}
        </Heading>
      </HStack>
      <HStack
        width="100%"
        justifyContent="space-between"
        mt={8}
        alignItems="flex-start"
      >
        <Box>
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">User</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.fullName}
            </Text>
          </VStack>
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">Status</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.fullName}
            </Text>
          </VStack>
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">State</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.state}
            </Text>
          </VStack>
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">Locality</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.lga}
            </Text>
          </VStack>
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">Area</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.area}
            </Text>
          </VStack>
          {/* <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">Inspection Date</Text>
            <Text fontSize="sm" fontWeight="bold">
              {enquiry?.fullName}
            </Text>
          </VStack> */}
          <VStack width="100%" alignItems="flex-start" spacing={0} mt={4}>
            <Text fontSize="sm">Date Applied</Text>
            <Text fontSize="sm" fontWeight="bold">
              <Moment format='LT'>{enquiry?.dateCreated}</Moment> - <Moment format='MM/DD/YYYY'>{enquiry?.dateCreated}</Moment> 
            </Text>
          </VStack>
        </Box>
        <Box alignItems="flex-start" width="50%">
          <HStack alignItems="flex-start" spacing={4}>
            <VStack width="70%" alignItems="flex-start" spacing={4}>
              <Button
                type="button"
                bg="transparent"
                border="2px"
                borderRadius="base"
                borderColor="grey.800"
                width="inherit"
              >
                View Property
              </Button>
              <Button
                type="button"
                bg="transparent"
                border="2px"
                borderRadius="base"
                borderColor="grey.800"
                width="inherit"
              >
                Upload Documents
              </Button>
              <Button
                type="button"
                bg="transparent"
                border="2px"
                borderRadius="base"
                borderColor="grey.800"
                width="inherit"
              >
                View Application Form
              </Button>
            </VStack>
            <VStack width="100%" alignItems="flex-start" spacing={2}>
              <HStack
                width="90%"
                alignItems="center"
                spacing={8}
                justifyContent="space-between"
              >
                <Heading as="h6" size="sm">
                  Scheduled Dates
                </Heading>
                <Button
                  size="xs"
                  bg={"transparent"}
                  borderRadius="base"
                  border="1px"
                  borderColor="grey.800"
                  onClick={onOpen}
                >
                  <AiOutlinePlus /> <Text as="span" ml={2}></Text>Add Date
                </Button>
              </HStack>
              {data && data.data.map((item: InspectionDateView) => 
                <InspectionDate inspection={item} list={listInspectionDates}/>
              )}
              
              {/* <Box boxShadow="base" width="90%" minHeight={"100px"}>
                <VStack width="100%" alignItems="flex-start">
                  <Heading size="sm" m="3">
                    <Moment format="ll">{new Date()}</Moment>
                  </Heading>
                  <SimpleGrid columns={4} spacingX="10px" p={3}>
                    <Box bg="gray.200" borderRadius="base" p={1}>
                      <Text fontSize="sm" fontWeight="bold">
                        <Moment format="LT">{new Date()}</Moment>{" "}
                      </Text>
                    </Box>
                    <Box bg="gray.200" borderRadius="base" p={1}>
                      <Text fontSize="sm" fontWeight="bold">
                        <Moment format="LT">{new Date()}</Moment>{" "}
                      </Text>
                    </Box>
                    <Box bg="gray.200" borderRadius="base" p={1}>
                      <Text fontSize="sm" fontWeight="bold">
                        <Moment format="LT">{new Date()}</Moment>{" "}
                      </Text>
                    </Box>
                  </SimpleGrid>
                  <HStack p={3} width="100%" justifyContent="space-between">
                    <Button
                      size="xs"
                      bg={"transparent"}
                      borderRadius="sm"
                      border="1px"
                      borderColor="grey.800"
                    >
                      <Text as="span" ml={2}></Text>Add Time slot
                    </Button>

                    <IconButton
                      variant="transparent"
                      colorScheme="gray"
                      aria-label="Delete timeslot"
                      icon={<DeleteIcon />}
                    />
                  </HStack>
                </VStack>
              </Box> */}
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </VStack>
    </>
  );
}
