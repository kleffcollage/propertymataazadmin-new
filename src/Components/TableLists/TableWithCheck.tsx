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
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { useOperationMethod } from "react-openapi-client";
import { Transaction } from "../../Types/api";
import Pagination from "../Pagination/Pagination";
import { Parameters } from "openapi-client-axios";
import ClientPagination from "../Pagination/ClientPagination";
import Moment from "react-moment";

function TableWithCheck() {
  const [listTransactions, { loading, data, error }] = useOperationMethod(
    "Admintransactionslist"
  );
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const getTransactions = () => {
    const params: Parameters = {
      limit: limit,
      offset: offset,
    };
    listTransactions(params);
  };

  useEffect(() => {
    getTransactions();
  }, [offset]);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <VStack width={"100%"}>
      <Box display="table" w={"100%"} height={"75vh"}>
        <Table variant="simple" w={"100%"} size={"lg"}>
          <Thead>
            <Tr bg="gray.100" p="2">
              <Th>
                <Checkbox />
              </Th>
              <Th>User</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
              <Th>Recipient</Th>
              <Th>Provider</Th>
              <Th>Channel</Th>
              <Th>Time</Th>
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
              data.data.value.map((transaction: Transaction, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td>{`${transaction.user?.firstName} ${transaction.user?.lastName}`}</Td>
                    <Td>{transaction.amount}</Td>
                    <Td>
                      {transaction.rentRelief
                        ? "RELIEF"
                        : transaction.property?.isForRent
                        ? "RENT"
                        : "PURCHASE"}
                    </Td>
                    <Td>PropertyMataaz</Td>
                    <Td>Flutterwave</Td>
                    <Td>{transaction.paymentLog?.paymentType}</Td>
                    <Td>
                      <Moment format="LT">{transaction.dateCreated}</Moment>
                    </Td>
                    <Td>{transaction.status?.name}</Td>
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
  );
}

export default TableWithCheck;
