import React, { useState } from "react";
import {
  Button,
  HStack,
  Select,
  VStack,
  TabPanel,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Layout from "../../Components/Layout/Layout";
import ListingTabs from "../../Components/Listings/ListingTabs";
import EnquiriesTable from "../../Components/Listings/Tabs/Enquiries";
import RequestsTable from "../../Components/Listings/Tabs/Requests";

export default function Listing() {
  const [totalEnquiries, setTotalEnquiries] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalProperties, setTotalProperties] = useState(0);
  return (
    <Layout>
      <HStack flex="flex-start" width="95%">
        <ListingTabs
          enquiryCount={totalEnquiries}
          requestCount={totalRequests}
          propertyCount={totalProperties}
        >
          <TabPanel>
            <VStack
              justifyContent="space-between"
              alignItems="flex-start"
              width="100%"
            >
              <EnquiriesTable setTotalEnquiries={setTotalEnquiries} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              justifyContent="space-between"
              alignItems="flex-start"
              width="100%"
            >
              <RequestsTable />
            </VStack>
          </TabPanel>
        </ListingTabs>
      </HStack>
    </Layout>
  );
}
