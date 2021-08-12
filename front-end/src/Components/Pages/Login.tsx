import { FC } from "react";
import { useSnackbar } from "notistack";
import { Login as LoginTemplate } from "@/Components/Templates/Login";
import { LoginFormData } from "@/Components/Organisms/LoginForm";
import { login } from "@/Services/Auth.service";

export const Login: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (formData: LoginFormData) => {
    try {
      await login({ name: formData.name!, email: formData.email! });
    } catch (e) {
      enqueueSnackbar("Usuário ou senha inválidos", { variant: "warning" });
    }
  };

  return <LoginTemplate onSubmit={onSubmit} />;
};
