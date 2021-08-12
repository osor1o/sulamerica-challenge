import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Date } from "@/Utils/Date";

export type Booking = {
  _id: string;
  user: User;
  vehicle: Vehicle;
  pickupDate: Date;
  returnDate: Date;
};
