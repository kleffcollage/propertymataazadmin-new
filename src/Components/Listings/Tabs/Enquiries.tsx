import React, { useEffect, useState } from "react";
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
  InputGroup,
  Input,
  InputLeftElement,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useOperationMethod } from "react-openapi-client";
import { Parameters } from "openapi-client-axios";
import ClientPagination from "../../Pagination/ClientPagination";
import Moment from "react-moment";
import { UserEnquiryView } from "../../../Types/api/user-enquiry-view";
import EnquiryDetails from "../../Enquiries/EnquiryDetails";

function EnquiriesTable({ setTotalEnquiries }: { setTotalEnquiries: any }) {
  const [listEnquiries, { loading, data, error }] =
    useOperationMethod("Adminenquirieslist");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [showDetail,setShowDetail] = useState(false);
  const [selectedEnquiry,setSelectedEnquiry] = useState<UserEnquiryView>();

  const getEnquiries = async () => {
    const params: Parameters = {
      limit: limit,
      offset: offset,
    };
    await listEnquiries(params);
};

// const goBack = () =>{
//     set
// }

setTotalEnquiries(data && data.data.size);
  useEffect(() => {
    getEnquiries();
  }, [offset]);

  useEffect(() => {
    getEnquiries();
  }, []);

  return !showDetail ? (

    <VStack width={"100%"}>
      <Box display="flex" flexDirection="column" width="100%" height="75vh">
        <InputGroup
          w={280}
          border="2px"
          borderColor="gray.700"
          borderRadius="base"
          my={3}
          width="100%"
        >
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
            _placeholder={{ color: "gray.800" }}
          />
        </InputGroup>
        <Table variant="simple">
          <Thead>
            <Tr bg="gray.200" p="2">
              <Th>Property Name</Th>
              <Th>User</Th>
              <Th>State</Th>
              <Th>Locality</Th>
              <Th>Area</Th>
              <Th>Inspection</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {loading
              ? Array(10)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <Tr>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                      </Tr>
                    );
                  })
              : null}
            {!loading &&
              data &&
              data.data.value.map((enquiry: UserEnquiryView, index: number) => {
                return (
                  <Tr key={index} cursor={"pointer"} onClick={() =>{ setSelectedEnquiry(enquiry); setShowDetail(true)}}>
                    <Td>{enquiry.propertyName}</Td>
                    <Td>{`${enquiry.fullName}`}</Td>
                    <Td>{enquiry.state}</Td>
                    <Td>{enquiry.lga}</Td>
                    <Td>{enquiry.area}</Td>
                    <Td>
                      <Moment format="LT">{enquiry.dateCreated}</Moment>
                    </Td>
                    <Td>Pending</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
      <ClientPagination
        limit={limit}
        offset={offset}
        size={data ? data.data.size : 0}
        setOffset={setOffset}
      />
    </VStack>
  ) : <EnquiryDetails enquiry={selectedEnquiry} goBack={() => setShowDetail(false)}/>;
}

export default EnquiriesTable;
