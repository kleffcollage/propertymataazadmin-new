import React from "react";
import { UserView } from "../Types/api";
import { ContextData } from "../Types/App/Types";

const data: ContextData = {};

export const MainContext = React.createContext({
  data,
  setUser: (user: UserView) => {},
});
