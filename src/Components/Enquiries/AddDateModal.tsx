import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
//@ts-ignore
import { Calendar } from "react-date-range";
import { InspectionDateModel } from "../../Types/api";
import { useOperationMethod } from "react-openapi-client";

export default function AddDateModal({
  propertyId,
  isOpen,
  onClose,
  reload
}: {
  propertyId?: number;
  isOpen: boolean;
  onClose: () => void;
  reload: () => void;
}) {
  const toast = useToast();
  const [inspectionDate, setInspectionDate] = useState<InspectionDateModel>({
    propertyId: propertyId,
    date: new Date() as unknown as string,
  });

  const [addInspectionDate, { loading, data, error }] = useOperationMethod(
    "Propertyinspectiondatescreate"
  );

  const addDate = async () => {
    console.log({ inspectionDate });
    const result = await addInspectionDate(undefined, inspectionDate);
    console.log({ result });
    
    if (result.data.status) {
      toast({
        title: "Date created.",
        description: "The date has been added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    //   window.location.reload();
    reload();
      onClose();
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
    return;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody justifyContent="center">
          <Calendar
            date={new Date(inspectionDate?.date as string)}
            onChange={(date: any) =>
              setInspectionDate({ ...inspectionDate, date: date })
            }
          />
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button
            bg="transparent"
            border="2px"
            borderColor="grey.800"
            borderRadius="base"
            width={"200px"}
            onClick={() => addDate()}
          >
            Add
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
