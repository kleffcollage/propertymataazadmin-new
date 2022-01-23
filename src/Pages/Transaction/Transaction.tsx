import { Button, HStack, Select, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import PrimaryInput from "../../Components/CustomInputs/PrimaryInput";
import Layout from "../../Components/Layout/Layout";
import TableWithCheck from "../../Components/TableLists/TableWithCheck";

export default function Transaction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Layout>
      <VStack
        alignItems="flex-start"
        bg="white"
        p="5"
        width="98%"
        height={"100%"}
        spacing="5"
      >
        <HStack justify="space-between" alignItems="center" width="100%">
          <PrimaryInput
            register={register}
            name="search"
            label="Search"
            error={errors.email}
            variant="outline"
            placeholder="Search"
            disableLabel={true}
            borderColor="black"
            borderRadius="base"
            placeholderColor="black"
          />
          <HStack spacing={6} align='center'>
            <Button bg="transparent" borderRadius="base" border='2px' size='md' px={6}>Export</Button>
            <Button bg="transparent" borderRadius="base" border='2px' size='md' px={8} py={4}>7 Feb - 8 Feb 2020 </Button>
            <Select placeholder="Filter" borderRadius="base" w={120} border='2px' borderColor='black'>
              <option value="option1">Filter option one</option>
              <option value="option2">Filter option two</option>
              <option value="option3">Filter option three</option>
            </Select>
          </HStack>
        </HStack>
        
        <HStack alignItems="flex-start" width="100%">
          {/* Transaction list */}
          <TableWithCheck />          
        </HStack>        
      </VStack>
    </Layout>
  );
}
