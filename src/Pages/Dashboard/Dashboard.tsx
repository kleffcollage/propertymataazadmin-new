import {
  Box,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/layout";
import { Skeleton, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { DashboardService } from "../../Services/DashboardService";
import { MetricsView } from "../../Types/api";
import { toastProps } from "../../Types/App/Types";

export default function Dashboard() {
  const toast = useToast();
  const [metrics, setMetrics] = useState<MetricsView>();
  const [isLoading, setIsLoading] = useState(true);

  const getMetrics = async () => {
    setIsLoading(true);
    const response = await DashboardService.getMetrics();
    if (!response.status) {
      toast({
        title: "An error occurred ",
        description: response.message,
        ...toastProps,
      });
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setMetrics(response.data);
    return;
  };

  useEffect(() => {
     const fetchDate = async () => await getMetrics(); 
     fetchDate();
  },[]);

  return (
    <Layout>
      <HStack bg="brand.grey" flex="flex-start" width="95%">
        <SimpleGrid
          bg="brand.grey"
          spacing="8"
          p="5"
          textAlign="center"
          columns={{ sm: 2, md: 4 }}
        >
          <MetricsCard title="All Users" value={metrics?.users} />
          <MetricsCard title="New Users" value={metrics?.newUsers} />
          <MetricsCard title="Active Users" value={metrics?.activeUsers} />
          <MetricsCard title="Total Users" value="0" />
        </SimpleGrid>
      </HStack>
    </Layout>
  );
}

const MetricsCard = ({ title, value }: { title: string; value: string | number | undefined }) => {
  return (
    <Box boxShadow="xs" rounded="md" bg="white" width="320px" height="170px">
      <VStack width="w-full" alignItems="flex-start">
        <Text fontSize="lg" fontWeight="bolder" px="6" py="4">
          {title}
        </Text>
        <Divider />
        <Skeleton isLoaded={value ? true : false}>
        <Text fontSize="4xl" fontWeight="bolder" py="4" px="6">
          {value}
        </Text>
        </Skeleton>
      </VStack>
    </Box>
  );
};
