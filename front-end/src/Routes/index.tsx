import { FC } from "react";
import { BrowserRouterProps, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./Private";
import { PublicRoute } from "./Public";

import { VehicleList } from "@/Components/Pages/VehicleList";
import { ShowVehicle } from "@/Components/Pages/ShowVehicle";
import { Login } from "@/Components/Pages/Login";

export const Routes: FC<BrowserRouterProps> = () => {
  return (
    <Switch>
      <PrivateRoute path="/veiculos" exact>
        <VehicleList />
      </PrivateRoute>
      <PrivateRoute path="/veiculos/:_id" exact>
        <ShowVehicle />
      </PrivateRoute>
      <PublicRoute path="/login" exact>
        <Login />
      </PublicRoute>
      <Redirect to="/login" />
    </Switch>
  );
};
