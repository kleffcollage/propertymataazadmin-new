import { HStack, Spacer, VStack } from "@chakra-ui/layout";
import React from "react";
import SIdeNav from "../SideNav/SIdeNav";
import TopNav from "../TopNav/TopNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HStack height='100vh' flex={1} alignItems="flex-start" spacing={0} bg="brand.grey">
      <SIdeNav />
      <VStack width="full" height="50px">
        <TopNav />
        <Spacer w="1rem" />
        { children }
      </VStack>
    </HStack>
  );
}
