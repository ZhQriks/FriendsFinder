import React, { useMemo } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { IRouteProps, publicRoutes as routes } from "./routes";
import Layout from "./shared/layout/Layout";
import AuthRoute from "./shared/AuthRoute";
function App() {
  const getAllRoutes = useMemo(
    () => {
      const getRoute = (route: IRouteProps) => (
        <Route
          // set the key to the path so that router can keep track of the route
          key={route.path}
          path={route.path}
          element={
            //block the user from accessing the route if they are not logged in
            route.isAuthRoute ? (
              <AuthRoute>{route.element}</AuthRoute>
            ) : (
              route.element
            )
          }
        >
          {/* display the children of the route if there are any*/}
          {route.items?.map((routeItem) => getRoute(routeItem))}
        </Route>
      );

      return <Routes>{routes.map((route) => getRoute(route))}</Routes>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [routes]
  );

  return <Layout>{getAllRoutes}</Layout>;
}

export default App;
