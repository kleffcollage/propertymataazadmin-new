import React from "react";
import Login from "../Components/Login/Login";
import Admin from "../Pages/Admin/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transaction from "../Pages/Transaction/Transaction";
import Listing from "../Pages/Listing/Listing";
import User from "../Pages/User/User";
import { IRoutes } from "../Types/App/Types";

const Routes: IRoutes[] = [
  {
    path: "/",
    key: "LOGIN",
    element: <Login />,
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    element: <Dashboard />,
  },
  {
    path: "/users",
    key: "USERS",
    element: <User />,
  },
  {
    path: "/transactions",
    key: "TRANSACTIONS",
    element: <Transaction />,
  },
  {
    path: "/admin",
    key: "ADMIN",
    element: <Admin />,
  },
  {
    path: "/listings",
    key: "LISTINGS",
    element: <Listing />,
  },
];

export default Routes;

// function RoutesWithSubRoutes(route: IRoutes) {
//   return (
//     <Route
//       path={route.path}
//       render={(props:any) => <route.component {...props} routes={route.routes} />}
//     />
//   );
// }

// export function RenderRoutes({ routes }: { routes: IRoutes[] }) {
//   return (
//     <Routes>
//       {routes.map((route, i) => {
//         return <RoutesWithSubRoutes {...route} />;
//       })}
//       <Route element={<h1>No Content Here!</h1>} />
//     </Routes>
//   );
// }
