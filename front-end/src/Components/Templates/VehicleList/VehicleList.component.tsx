import { FC } from "react";
import { VehicleListProps } from "./VehicleList.types";
import { VehicleList as VehicleListOrganism } from "@/Components/Organisms/VehicleList";

export const VehicleList: FC<VehicleListProps> = ({ ...rest }) => {
  return <VehicleListOrganism {...rest} />;
};

VehicleList.defaultProps = {
  ...VehicleListOrganism.defaultProps,
};
