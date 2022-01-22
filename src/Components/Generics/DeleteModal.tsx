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
import { Text } from "@chakra-ui/layout";
import React from "react";

export default function DeleteModal({
  isOpen,
  onClose,
  onDelete,
  name,
  loading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  name: string;
  loading: boolean;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Delete ${name}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{`Are you sure you want to delete this ${name}, this action can not be reverted.`}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="red" mr={3} onClick={onDelete}>
            {loading ? `Deleting` : `Delete`}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
