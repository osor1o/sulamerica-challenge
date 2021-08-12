import { FC } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { LoginHeader } from "@/Components/Molecules/LoginHeader";
import { useForm } from "react-hook-form";
import {
  LoginFormProps,
  LoginFormData,
  validationSchema,
} from "./LoginForm.types";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit!)} data-testid="login-form">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LoginHeader />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                inputProps={{
                  "data-testid": "login-form-input-email",
                }}
                {...register("email")}
                helperText={errors.email?.message}
                error={!!errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                inputProps={{
                  "data-testid": "login-form-input-name",
                }}
                {...register("name")}
                helperText={errors.name?.message}
                error={!!errors.name}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Acessar / Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};
