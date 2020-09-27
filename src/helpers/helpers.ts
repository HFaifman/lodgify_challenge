import { House } from "../api/interfaces/house";
import { TAG } from "../commons/constants/colors";

export const isBookable = (house: House) => {
  const { booked, bookable } = house;

  if (bookable) {
    return true;
  }

  if (!bookable && booked > 0) {
    return booked;
  }

  return false;
};

export const getTagStatus = (
  status: boolean | number
): {
  text: string;
  color: string;
} => {
  if (status === true) {
    return {
      text: "available",
      color: TAG.AVAILABLE,
    };
  }
  if (status === false) {
    return {
      text: "unavailable",
      color: TAG.UNAVAILABLE,
    };
  }
  return {
    text: "booked",
    color: TAG.BOOKED,
  };
};
