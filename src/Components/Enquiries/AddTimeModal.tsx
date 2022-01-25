import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { StaticTimePicker, TimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { InspectionTime } from "../../Types/api";
export default function AddTimeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [time, setTime] = useState<InspectionTime>();
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <StaticTimePicker
              //   displayStaticWrapperAs="desktop"
              ampm
              value={time?.availableTime}
              orientation="landscape"
              openTo="minutes"
              onChange={(newValue) => {
                setTime({ ...time, availableTime: newValue as string });
              }}
              renderInput={(params) => <input />}
            />
          </LocalizationProvider>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Add Time</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
