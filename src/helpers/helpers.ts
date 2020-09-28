import { House } from "../api/interfaces/house";
import { TAG } from "../commons/constants/colors";

export const getTagStatus = (
  house: House
): {
  text: string;
  color: string;
} => {
  if (house.booked > 0) {
    return {
      text: "booked",
      color: TAG.BOOKED,
    };
  }
  if (house.bookable) {
    return {
      text: "available",
      color: TAG.AVAILABLE,
    };
  }
  return {
    text: "unavailable",
    color: TAG.UNAVAILABLE,
  };
};
