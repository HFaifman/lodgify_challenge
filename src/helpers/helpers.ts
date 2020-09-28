import { House } from "../api/interfaces/house";
import { TAG } from "../commons/constants/colors";
import { TAG as TAG_TEXT } from "../commons/constants/texts";

export const getTagStatus = (
  house: House
): {
  text: string;
  color: string;
} => {
  if (house.booked > 0) {
    return {
      text: TAG_TEXT.BOOKED,
      color: TAG.BOOKED,
    };
  }
  if (house.bookable) {
    return {
      text: TAG_TEXT.AVAILABLE,
      color: TAG.AVAILABLE,
    };
  }
  return {
    text: TAG_TEXT.UNAVAILABLE,
    color: TAG.UNAVAILABLE,
  };
};
