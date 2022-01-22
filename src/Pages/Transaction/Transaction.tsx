import { Button, HStack, Select, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import PrimaryInput from "../../Components/CustomInputs/PrimaryInput";
import Layout from "../../Components/Layout/Layout";

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
        height={"90vh"}
        spacing="5"
      >
        <HStack justify="space-between" alignItems="flex-start" width="100%">
          <PrimaryInput
            register={register}
            name="search"
            label="Search"
            error={errors.email}
            variant="outline"
            placeholder="Search"
            disableLabel={true}
            borderColor="black"
            borderRadius="sm"
            placeholderColor="black"
          />
          <HStack>
            <Button>Export </Button>
            <Button>7 Feb - 8 Feb 2020 </Button>
            <Select placeholder="Select option">
              <option value="option1">Filter</option>
            </Select>
          </HStack>
        </HStack>
      </VStack>
    </Layout>
  );
}
