import { FC, useEffect, useState } from "react";
import { Date } from "@/Utils/Date";
import { useParams, useHistory } from "react-router-dom";
import { useAppSelector } from "@/Store";
import { Vehicle } from "@/Types/Vehicle";
import { findVehicleBy_Id } from "@/Services/Vehicle.service";
import { ShowVehicle as ShowVehicleTemplate } from "@/Components/Templates/ShowVehicle";
import { BookingFormData } from "@/Components/Organisms/BookingForm";
import { createBooking } from "@/Services/Booking.service";
import { useSnackbar } from "notistack";

export const ShowVehicle: FC = () => {
  const user = useAppSelector((state) => state.user);
  const { _id } = useParams<{ _id: string }>();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const vehicle = await findVehicleBy_Id(_id);
        setVehicle(vehicle);
      } catch (e) {
        enqueueSnackbar("Veículo não encontrado", { variant: "warning" });
        history.push("/veiculos");
      }
    };

    getVehicle();
  }, [_id, enqueueSnackbar, history]);

  const onSubmit = async (formData: BookingFormData) => {
    const pickupDate = formData.pickupDate as Date;
    const returnDate = formData.returnDate as Date;

    try {
      await createBooking({
        pickupDate,
        returnDate,
        vehicle: _id,
        user: user!._id,
      });
      enqueueSnackbar("Reserva criada com sucesso", { variant: "success" });
      history.push("/veiculos");
    } catch (e) {
      enqueueSnackbar("Erro ao criar reserva", { variant: "error" });
    }
  };

  return <ShowVehicleTemplate vehicle={vehicle} onSubmit={onSubmit} />;
};
