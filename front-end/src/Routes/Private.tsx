import { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useAppSelector } from "@/Store";

export const PrivateRoute: FC<RouteProps> = (props) => {
  const user = useAppSelector((state) => state.user);
  const token = useAppSelector((state) => state.auth.token);

  if (!user || !token) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};
