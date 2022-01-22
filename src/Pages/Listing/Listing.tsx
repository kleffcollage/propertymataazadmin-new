import React from "react";
import { Button, HStack, Select, VStack, TabPanel } from "@chakra-ui/react";
import Layout from "../../Components/Layout/Layout";
import ListingTabs from "../../Components/Listings/ListingTabs";


export default function Listing() {
    return (
        <Layout>
            <HStack flex="flex-start" width="95%">
                <ListingTabs>
                    <TabPanel>
                        <HStack justifyContent="space-between" width="90%" pr="10">
                        
                        </HStack>
                    </TabPanel>
                </ListingTabs>
            </HStack>
        </Layout>
    )
}