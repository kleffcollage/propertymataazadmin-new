import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PagedApiResponseData } from "../../Types/App/Types";

export default function ClientPagination({
  offset,
  limit,
  size,
  setOffset
}: {
  offset:number;
  limit: number;
  size:number;
  setOffset: any;
}) {
  // console.log(data);

  const [totalPages] = useState(
    Math.ceil((size as number) / (limit as unknown as number))
  );
    const number = Math.ceil((((limit as unknown as number) + (offset as unknown as number)) /
    (limit as unknown as number)) as number);

  const [currentPage] = useState(
    (((limit as unknown as number) + (offset as unknown as number)) /
      (limit as unknown as number)) as number
  );

  const paginate = async (direction: any) => {
    console.log(direction);
    if(offset === undefined || limit === undefined) return;
    if(size <= limit) return;
    if(size - offset < limit){
      setOffset(size - limit);
      return;
    }
    if(direction === "next"){
      setOffset(offset + limit);
      return;
    }

    setOffset(offset - limit);
  };

  return (
    <HStack>
      <HStack spacing={0}>
        <Button
          bg="white"
          p="3"
          ml="0"
          color="gray.300"
          // disabled={totalPages === 0 ? true : false}
          onClick={() => {
            paginate("previous");
          }}
        >
          <AiOutlineLeft />
        </Button>
        <Box bg="white" p="2" mr="0" color="black">
          {number }
        </Box>
      </HStack>
      <Text>{`of ${totalPages ? totalPages : 1}`}</Text>
      <Button
        bg="white"
        p="3"
        // disabled={totalPages === 0 || < 2 ? true : false}
        color="gray.300"
        onClick={() => {
          paginate("next");
        }}
      >
        <AiOutlineRight />
      </Button>
    </HStack>
  );
}
