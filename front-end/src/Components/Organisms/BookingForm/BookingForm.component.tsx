import { FC, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
  BookingFormProps,
  BookingFormData,
  validationSchema,
} from "./BookingForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@/Components/Molecules/DatePicker";
import { Date, toDate } from "@/Utils/Date";

const lastValues = {
  pickupDate: toDate(),
  returnDate: toDate().add(1, "day"),
};

export const BookingForm: FC<BookingFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting },
    setValue,
  } = useForm<BookingFormData>({
    defaultValues: lastValues,
    resolver: yupResolver(validationSchema),
  });

  const pickupDate = watch("pickupDate") as Date;
  const returnDate = watch("returnDate") as Date;

  useEffect(() => {
    if (pickupDate > returnDate) {
      if (lastValues.pickupDate !== pickupDate) {
        setValue("returnDate", toDate(pickupDate).add(1, "day"));
      }

      if (lastValues.returnDate !== returnDate) {
        setValue("pickupDate", toDate(returnDate).subtract(1, "day"));
      }

      lastValues.pickupDate = pickupDate;
      lastValues.returnDate = returnDate;
    }
  }, [pickupDate, returnDate, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit!)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography>Período da reserva</Typography>
        </Grid>
        <Grid item>
          <DatePicker
            label="Data de retirada"
            control={control}
            name="pickupDate"
            minDate={toDate()}
          />
        </Grid>
        <Grid item>
          <DatePicker
            label="Data de devolução"
            control={control}
            name="returnDate"
          />
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Finalizar reserva
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

BookingForm.defaultProps = {
  onSubmit: () => {},
};
