import { yup, SchemaOf } from "@/Utils/Yup";

export type LoginFormData = {
  name?: string;
  email?: string;
};

export type LoginFormProps = {
  onSubmit?: (data: LoginFormData) => any;
};

export const validationSchema: SchemaOf<LoginFormData> = yup.object().shape({
  email: yup.string().required().min(3).email(),
  name: yup.string().required().min(3),
});
