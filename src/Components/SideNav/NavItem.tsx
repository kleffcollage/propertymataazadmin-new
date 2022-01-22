import React from "react";
import { Link } from "react-router-dom";
import { HStack, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { NavItem as NavItemType } from "../../Types/App/Types";

export default function NavItem({ item }: { item: NavItemType }) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Link to={item.path}>
      <ChakraLink variant="unstyled" _hover={{ textDecoration: "none" }}>
        <HStack
          spacing={4}
          align="center"
          justify="flex-start"
          height={{ base: 10, "2xl": 14 }}
          transition="ease-out"
          transitionProperty="background"
          transitionDuration="normal"
        //   _hover={{ background: "blue.300" }}
        >
          <Icon
            width={5}
            height={5}
            mr={4}
            ml={8}
            color={isActive ? "green.500" : "white"}
            as={item.icon}
          />
          <Text
            fontSize={isActive ? "md" : "sm"}
            fontWeight="semibold"
            color={"white"}
            flex={1}
            letterSpacing="wider"
            transition="ease-out"
            transitionProperty="size"
            _hover={{fontSize:"md"}}
          >
            {item.name}
          </Text>
        </HStack>
      </ChakraLink>
    </Link>
  );
}
