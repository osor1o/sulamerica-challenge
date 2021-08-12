import { FC } from "react";
import { VehicleListProps } from "./VehicleList.types";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

export const VehicleList: FC<VehicleListProps> = ({ vehicles, onSelect }) => {
  return (
    <Grid container spacing={2}>
      {vehicles.map((vehicle) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={vehicle._id}>
            <Card>
              <CardActionArea
                component="button"
                onClick={() => onSelect!(vehicle)}
              >
                <CardMedia
                  image={vehicle.image}
                  title={vehicle.model}
                  style={{ height: 160 }}
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={!2}>
                      <Typography variant="h6" component="h2">
                        {vehicle.model}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={1}
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="body2" component="h3">
                            {vehicle.brand}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" component="h3">
                            {vehicle.year}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

VehicleList.defaultProps = {
  onSelect: () => {},
};
