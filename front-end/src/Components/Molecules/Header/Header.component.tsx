import { FC } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import { HeaderProps } from "./Header.types";
import { styles } from "./Header.styles";

export const Header: FC<HeaderProps> = ({ user, onLogout }) => {
  const [firstName, lastName] = user?.name.split(" ") || [];

  return (
    <AppBar position="static">
      <Container>
        <Toolbar style={styles.toolbar}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h1">
                Locadora
              </Typography>
            </Grid>
            <Grid item>
              {user && (
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="body2" component="h1">
                      Olá, {firstName} {lastName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button color="inherit" size="small" onClick={onLogout}>
                      Sair
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.defaultProps = {
  onLogout: () => {},
};
