import { Container, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "@/Store";
import { theme } from "@/Theme";
import { Routes } from "@/Routes";
import { Header } from "@/Components/Pages/Header";
import MomentUtils from "@date-io/moment";
import moment from "moment";

import "moment/locale/pt-br";
import "normalize.css";

const locale = "pt-br";
moment.locale(locale);

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
              <Router>
                <Header />
                <Container
                  style={{
                    marginTop: 32,
                    marginBottom: 32,
                  }}
                >
                  <Routes />
                </Container>
              </Router>
            </MuiPickersUtilsProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
