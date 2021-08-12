import { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useAppSelector } from "@/Store";

export const PublicRoute: FC<RouteProps> = (props) => {
  const user = useAppSelector((state) => state.user);
  const token = useAppSelector((state) => state.auth.token);

  if (user && token) {
    return <Redirect to="/veiculos" />;
  }

  return <Route {...props} />;
};
