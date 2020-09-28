import { House } from "../../api/interfaces/house";

export const MOCK_RESPONSE_BOOKABLE: House[] = [
  {
    id: "4308041031",
    name: "Schiller",
    image: "https://picsum.photos/1068/534",
    bookable: true,
    booked: 0,
  },
];

export const MOCK_RESPONSE_NOT_BOOKABLE: House[] = [
  {
    id: "4308041031",
    name: "Schiller",
    image: "https://picsum.photos/1068/534",
    bookable: false,
    booked: 0,
  },
];

export const MOCK_RESPONSE_BOOKED: House[] = [
  {
    id: "4308041031",
    name: "Schiller",
    image: "https://picsum.photos/1068/534",
    bookable: false,
    booked: 6,
  },
];
