import { List, ListItem, VStack } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react";
import { GoGraph } from "react-icons/go";
import { FaUsers, FaStamp, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiBackwardTime, GiVacuumCleaner, GiGreenhouse } from "react-icons/gi";
import { MdListAlt } from "react-icons/md";
import { FiPercent, FiSettings } from "react-icons/fi";
import React from "react";
import { NavItem as NavItemType } from "../../Types/App/Types";
import NavItem from "./NavItem";

const navigation: NavItemType[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: GoGraph ,
  },
  {
    name: "Users",
    path: "/users",
    icon: FaUsers,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: GiBackwardTime,
  },
  {
    name: "Listings",
    path: "/listings",
    icon: MdListAlt,
  },
  {
    name: "Cleaning",
    path: "/cleaning",
    icon: GiVacuumCleaner,
  },
  {
    name: "Rent",
    path: "/rent",
    icon: GiGreenhouse,
  },
  {
    name: "Rent Relief",
    path: "/rent-relief",
    icon: FiPercent,
  },
  {
    name: "verification",
    path: "/verification",
    icon: FaStamp,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: FaRegMoneyBillAlt,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: FiSettings,
  },
];

export default function SIdeNav() {
  return (
    <VStack alignItems="flex-start" width="250px" height="100vh" flexShrink={0} bg="primary">
      <Image width="75%" src="/assets/logo.png" align="center" m="5"/>
      <List>
        {navigation.map((item, index) => (
          <ListItem key={index}><NavItem item={item}/></ListItem>
        ))}
      </List>
    </VStack>
  );
}
