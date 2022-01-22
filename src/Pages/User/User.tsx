import { HStack, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import UserDetails from "../../Components/Users/UserDetails";
import UserList from "../../Components/Users/UserList";
import { UserService } from "../../Services/UserService";
import { UserView } from "../../Types/api";
import {  PagedApiResponseData, toastProps } from "../../Types/App/Types";

export default function User() {
  const [userResponse, setUserResponse] = useState<PagedApiResponseData<UserView>>();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserView>();

  const getUsers = async (url?: string) => {
    setLoading(true);
    const response = await UserService.listUsers(url);
    if (!response.status) {
      setLoading(false);
      toast({
        title: "Error",
        status: "error",
        ...toastProps,
        description: "An Error occurred",
      });
    }
    setUserResponse(response.data);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => await getUsers();
    fetchData();
  },[]);

  return (
    <Layout>
      <HStack flex="flex-start" width="95%">
        <UserList getUsers={getUsers} loading={loading} data={userResponse} setSelectedUser={setUser}/>
        <UserDetails user={user}/>
      </HStack>
    </Layout>
  );
}
