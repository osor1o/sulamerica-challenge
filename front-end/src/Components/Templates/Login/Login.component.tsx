import { FC } from "react";
import { LoginProps } from "./Login.types";
import { styles } from "./Login.styles";
import { Grid } from "@material-ui/core";
import { LoginForm } from "@/Components/Organisms/LoginForm";

export const Login: FC<LoginProps> = ({ onSubmit }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <Grid item xs={12} style={styles.containerItem}>
        <LoginForm onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
};

Login.defaultProps = {
  ...LoginForm.defaultProps,
};
