import {
  Box,
  Divider,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { PropertyView } from "../../Types/api";
import { BsTags } from "react-icons/bs";

export default function ListCard({ property }: { property: PropertyView }) {
  return (
    <Box>
      <HStack>
        <Image
          src={
            property?.mediaFiles?.filter((m) => m.isImage)[0]?.url ??
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          }
          alt={property?.title ?? ""}
          width={70}
          height={75}
          borderRadius={7}
        />
        <VStack alignItems="flex-start" spacing={0}>
          <Text fontSize="sm" fontWeight="bold" color="gray">
            {property?.name}
          </Text>
          <Text>
            Owner: <Text as="span">{property.createdByUser?.fullName}</Text>{" "}
          </Text>
          <HStack alignItems="flex-start" spacing={1} justifyContent="flex-start" alignSelf="flex-start">
          <Icon
            width={5}
            height={5}
            color={"brand.blue"}
            as={BsTags}
          />
          <Text fontSize="sm" fontWeight="bold">
            {property?.price}
          </Text>
          </HStack>
          <Divider />
        </VStack>
      </HStack>
    </Box>
  );
}
