import { Vehicle } from "@/Types/Vehicle";

const mockVehicles: Vehicle[] = [
  {
    _id: "mady4ccqzcki0rnf",
    brand: "HAFEI",
    model: "Towner Pick_up Ba",
    year: 2011,
    image: "https://picsum.photos/300",
    mileage: 5000,
    color: "Preto",
  },
  {
    _id: "88r3hsueh1vd78fd",
    brand: "VW - VolksWagen",
    model: "Fox Rock in Rio 1.6 Mi Total Flex 8V 5p",
    year: 2012,
    image: "https://picsum.photos/400",
    mileage: 12051,
    color: "Dourado",
  },
  {
    _id: "kl4k3t6ya996dqng",
    brand: "RELY",
    model: "PICK-UP Q22D CS 1.0 2p",
    year: 2014,
    image: "https://picsum.photos/310",
    mileage: 5600,
    color: "Cinza",
  },
  {
    _id: "nkwib3jx81zxkk36",
    brand: "Fibravan",
    model: "Buggy Vip 1.6 8V Total Flex",
    year: 2007,
    image: "https://picsum.photos/200",
    mileage: 105090,
    color: "Azul",
  },
  {
    _id: "32e3wpjsy1rcc13f",
    brand: "CHERY",
    model: "QQ 1.0 ACT FL 12V 69cv 5p",
    year: 2015,
    image: "https://picsum.photos/450",
    mileage: 5590,
    color: "Prata",
  },
  {
    _id: "z8cqhgx6i7oy6ala",
    brand: "Seat",
    model: "Cordoba Vario 1.6L",
    year: 2000,
    image: "https://picsum.photos/500",
    mileage: 130589,
    color: "Vermelho",
  },
];

export const findAllVehicles = (): Vehicle[] => {
  return mockVehicles;
};

export const findVehicleBy_Id = (_id: string) => {
  const vehicle = mockVehicles.find((vehicle) => vehicle._id === _id);
  if (!vehicle) {
    throw new Error("NOT_FOUND");
  }
  return vehicle;
};
