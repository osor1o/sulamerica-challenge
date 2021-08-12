import { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { LoginHeaderProps } from "./LoginHeader.types";

export const LoginHeader: FC<LoginHeaderProps> = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography
        align="center"
        variant="h3"
        component="h2"
        data-testid="login-header-title"
      >
        Login ou cadastro
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align="center"
        variant="subtitle1"
        component="p"
        data-testid="login-header-subtitle"
      >
        Acesse para realizar sua reserva
      </Typography>
    </Grid>
  </Grid>
);
