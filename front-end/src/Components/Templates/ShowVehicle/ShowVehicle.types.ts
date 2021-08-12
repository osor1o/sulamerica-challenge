import { BookingFormProps } from "@/Components/Organisms/BookingForm/BookingForm.types";
import { VehicleDetailsProps } from "@/Components/Organisms/VehicleDetails/VehicleDetails.types";

export type ShowVehicleProps = BookingFormProps &
  Partial<VehicleDetailsProps> & {};
