import { Control } from "react-hook-form";
import { DatePickerProps as MaterialDatePickerProps } from "@material-ui/pickers";

export type DatePickerProps = Partial<MaterialDatePickerProps> & {
  control: Control<any>;
  name: string;
};
