import { yup, SchemaOf } from "@/Utils/Yup";
import { Date } from "@/Utils/Date";

export type BookingFormData = {
  pickupDate?: any;
  returnDate?: any;
};

export type BookingFormProps = {
  onSubmit?: (formData: BookingFormData) => any;
};

export const validationSchema: SchemaOf<BookingFormData> = yup.object().shape({
  pickupDate: yup.mixed().required(),
  returnDate: yup
    .mixed()
    .required()
    .test(
      "diff-days-lower-than-30",
      "O período máximo de locação é de 30 dias seguidos",
      (value, context) => {
        const returnDate = value as Date;
        const pickupDate = context.parent.pickupDate as Date;
        return returnDate.diff(pickupDate, "days") <= 30;
      }
    ),
});
