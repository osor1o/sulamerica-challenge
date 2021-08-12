import { FC } from "react";
import { Grid, Typography, CardMedia, Divider } from "@material-ui/core";
import { VehicleDetailsProps } from "./VehicleDetails.types";
import { styles } from "./VehicleDetails.styles";

export const VehicleDetails: FC<VehicleDetailsProps> = ({ vehicle }) => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <CardMedia image={vehicle.image} style={styles.image} />
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="body1" component="span">
              Ano: {vehicle.year}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Typography variant="body1" component="h2">
              Cor: {vehicle.color}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Typography variant="body1" component="h2">
              Marca: {vehicle.brand}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Typography variant="body1" component="h2">
              Quilometragem: {vehicle.mileage}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
