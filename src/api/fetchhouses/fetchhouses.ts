import { House } from "../interfaces/house";

const fetchHouses = async () => {
  const houses: House[] = await (
    await fetch(
      "https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house"
    )
  ).json();
  return houses;
};
export default fetchHouses;
