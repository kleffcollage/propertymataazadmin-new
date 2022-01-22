import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminList from "../../Components/Admins/AdminList";
import Layout from "../../Components/Layout/Layout";
import { UserView } from "../../Types/api";
import { useOperationMethod } from 'react-openapi-client';
import AdminDetails from "../../Components/Admins/AdminDetails";


export default function Admin() {
    const [listAdmin, { loading, data, error }] = useOperationMethod('Adminlist');
    const [selectedUser,setSelectedUser] = useState<UserView>();

    const getUsers = (url?:string) => {
        // throw new Error("Function not implemented.");
    }

    useEffect(() => {
        listAdmin();
    } , [])

    return (
    <Layout>
      <HStack flex="flex-start" width="95%">
          <AdminList loading={loading} data={data?.data} getUsers={getUsers} setSelectedUser={setSelectedUser}/>
          <AdminDetails user={selectedUser}/>
      </HStack>
    </Layout>
  );
}


