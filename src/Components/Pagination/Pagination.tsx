import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PagedApiResponseData } from "../../Types/App/Types";

export default function Pagination({
  data,
  getData,
}: {
  data: PagedApiResponseData<any> | undefined;
  getData: any;
}) {
  console.log(data);

  const [totalPages] = useState(
    Math.ceil((data?.size as number) / (data?.limit as unknown as number))
  );
    const number = (((data?.limit as unknown as number) + (data?.offset as unknown as number)) /
    (data?.limit as unknown as number)) as number;

  const [currentPage] = useState(
    (((data?.limit as unknown as number) + (data?.offset as unknown as number)) /
      (data?.limit as unknown as number)) as number
  );

  const paginate = async (direction: any) => {
    let url = "";
    if (direction === "next") {
      url = `?${data?.next?.href?.split("?")[1] as string}`;
      await getData(url);
      return;
    }
    url = `?${data?.previous?.href?.split("?")[1] as string}`;
    await getData(url);
    return;
  };

  return (
    <HStack>
      <HStack spacing={0}>
        <Button
          bg="white"
          p="3"
          ml="0"
          color="gray.300"
          disabled={totalPages === 0 ? true : false}
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
        disabled={totalPages === 0 ? true : false}
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
