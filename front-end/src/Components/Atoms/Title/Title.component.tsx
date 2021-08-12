import { FC } from "react";
import { TitleProps } from "./Title.types";
import { Typography } from "@material-ui/core";

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <Typography variant="h6" component="h2">
      {children}
    </Typography>
  );
};
