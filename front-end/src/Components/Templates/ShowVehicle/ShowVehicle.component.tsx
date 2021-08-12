import { FC } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { ShowVehicleProps } from "./ShowVehicle.types";
import { BookingForm } from "@/Components/Organisms/BookingForm";
import { VehicleDetails } from "@/Components/Organisms/VehicleDetails";
import { Title } from "@/Components/Atoms/Title";

export const ShowVehicle: FC<ShowVehicleProps> = ({ vehicle, onSubmit }) => {
  return vehicle ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title>{vehicle.model}</Title>
      </Grid>
      <Grid item xs={12} md={6}>
        <VehicleDetails vehicle={vehicle} />
      </Grid>
      <Grid item xs={12} md={6}>
        <BookingForm onSubmit={onSubmit!} />
      </Grid>
    </Grid>
  ) : (
    <LinearProgress />
  );
};

ShowVehicle.defaultProps = {
  ...VehicleDetails.defaultProps,
  ...BookingForm.defaultProps,
};
