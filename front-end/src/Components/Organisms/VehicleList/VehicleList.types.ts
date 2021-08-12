import { Vehicle } from "@/Types/Vehicle";

export type VehicleListProps = {
  vehicles: Vehicle[];
  onSelect?: (vehicle: Vehicle) => any;
};
