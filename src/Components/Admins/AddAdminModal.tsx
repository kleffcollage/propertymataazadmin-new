import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Register } from "../../Types/api";
import PrimaryInput from "../CustomInputs/PrimaryInput";
import { useOperationMethod } from "react-openapi-client";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

export default function AddAdminModal({
  isOpen,
  onClose,
  onAddAdmin,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAddAdmin: () => void;
}) {
  const toast = useToast();
  const [addAdmin, { loading, data, error }] =
    useOperationMethod("Admincreate");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    defaultValues: { email: "", firstName: "", lastName: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Register) => {
    console.log({ data });

    const result = await addAdmin(undefined, data);
    if (result.data.status) {
      toast({
        title: "Account created.",
        description: "The new admin account has been created",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      onClose();
      window.location.reload();
      return;
    }
    toast({
      title: "An Error Occurred",
      description: result.data.message,
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new admin</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
            <Stack my="4" spacing="6">
              <PrimaryInput
                register={register}
                name="firstName"
                label="Firstname"
                error={errors.firstName}
                variant="outline"
                placeholder="First name here"
              />
              <PrimaryInput
                register={register}
                name="lastName"
                label="Lastname"
                error={errors.firstName}
                variant="outline"
                placeholder="Last name here"
              />
              <PrimaryInput
                register={register}
                name="email"
                label="Email Address"
                error={errors.email}
                variant="outline"
                placeholder="Enter email address"
              />
              <Button
                variant="solid"
                type="submit"
                isLoading={loading}
                colorScheme="blue"
                bg="primary"
              >
                Add Admin
              </Button>
            </Stack>
          </form>
        </ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
