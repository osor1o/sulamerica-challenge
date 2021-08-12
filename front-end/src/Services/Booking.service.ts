// import { privateRequest } from "@/Utils/Request";
// import { Booking } from "@/Types/Booking";
import { Date } from "@/Utils/Date";

export type CreateBookingDto = {
  vehicle: string;
  user: string;
  pickupDate: Date;
  returnDate: Date;
};

export const createBooking = async (createBookingDto: CreateBookingDto) => {
  // const { data } = await privateRequest.post<Booking>(
  //   "/booking",
  //   createBookingDto
  // );
  const data = createBookingDto;

  return data;
};
