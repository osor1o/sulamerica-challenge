import { FC, useMemo, useEffect, useState } from "react";
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

export const BookingForm: FC<BookingFormProps> = ({ onSubmit }) => {
  const [lastValues, setLastValues] = useState<BookingFormData>({
    pickupDate: toDate(),
    returnDate: toDate().add(1, "day"),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm<BookingFormData>({
    defaultValues: lastValues,
    resolver: yupResolver(validationSchema),
  });

  const today = useMemo(() => toDate(), []);
  const pickupDate = watch("pickupDate") as Date;
  const returnDate = watch("returnDate") as Date;

  useEffect(() => {
    if (pickupDate > returnDate) {
      if (lastValues.pickupDate !== pickupDate) {
        setValue("returnDate", toDate(pickupDate).add(1, "day"));
      }

      if (lastValues.returnDate !== returnDate) {
        const newPickupDate = toDate(returnDate);
        if (newPickupDate > today) {
          newPickupDate.subtract(1, "day");
        }
        setValue("pickupDate", newPickupDate);
      }
    }

    setLastValues({
      pickupDate,
      returnDate,
    });
  }, [
    pickupDate,
    returnDate,
    setValue,
    lastValues.pickupDate,
    lastValues.returnDate,
    today,
  ]);

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
            minDate={today}
          />
        </Grid>
        <Grid item>
          <DatePicker
            label="Data de devolução"
            control={control}
            name="returnDate"
            minDate={today}
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
