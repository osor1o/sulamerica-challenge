import { FC, useEffect, useState } from "react";
import { Vehicle } from "@/Types/Vehicle";
import { useHistory } from "react-router-dom";
import { VehicleList as VehicleListTemplate } from "@/Components/Templates/VehicleList";
import { findAllVehicles } from "@/Services/Vehicle.service";

export const VehicleList: FC = () => {
  const history = useHistory();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      const vehicles = findAllVehicles();
      setVehicles(vehicles);
    };

    getVehicles();
  }, []);

  const onSelect = (vehicle: Vehicle) => {
    history.push(`/veiculos/${vehicle._id}`);
  };

  return <VehicleListTemplate vehicles={vehicles} onSelect={onSelect} />;
};
