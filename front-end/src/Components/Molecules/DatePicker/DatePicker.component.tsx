import { FC } from "react";
import { Controller } from "react-hook-form";
import { DatePicker as MaterialDatePicker } from "@material-ui/pickers";
import { DatePickerProps } from "./DatePicker.types";

export const DatePicker: FC<DatePickerProps> = ({
  name,
  control,
  defaultValue,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { ref, value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <MaterialDatePicker
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

DatePicker.defaultProps = {
  fullWidth: true,
  inputVariant: "outlined",
  format: "DD/MM/y",
  defaultValue: null,
};
