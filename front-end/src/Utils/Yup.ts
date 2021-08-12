import * as yup from "yup";
import { ptShort } from "yup-locale-pt";

yup.setLocale(ptShort);

export * from "yup";
export { yup };
