import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { MainContext } from "../../Contexts/MainContext";
import Routes from "../../Routes/Routes";
import { UserView } from "../../Types/api";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { OpenAPIProvider } from "react-openapi-client";
import schema from '../../Types/api-schema.json';

function App() {
  const [data, setData] = useState({});

  const setUser = useCallback(
    (user?: UserView) => {
      localStorage.setItem("user", JSON.stringify(user));
      setData({ ...data, user: user });
    },
    [data, setData]
  );

  const headers: HeadersInit = {
		cor: "no-cors",
		Authorization: `Bearer ${
			localStorage.getItem("token") ? localStorage.getItem("token") : ""
		}`,
	};

  useEffect(() => {
    localStorage.getItem("user")
      ? setUser(JSON.parse(localStorage.getItem("user") || "{}"))
      : localStorage.setItem("", "");
  }, []);

  let elements = useRoutes(Routes);
  return (
    <MainContext.Provider value={{ data, setUser }}>
      <OpenAPIProvider
        definition={
          // "https://propertymataazapi.herokuapp.com/swagger/v1/swagger.json"
          '/api-schema.json'
        }
        axiosConfigDefaults={{ withCredentials: true,headers,baseURL: 'https://propertymataazapi.herokuapp.com/' }}
      >
        <ChakraProvider theme={theme}>{elements}</ChakraProvider>
      </OpenAPIProvider>
    </MainContext.Provider>
  );
}

export default App;
