import React from "react";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import GlobalStyles from "./commons/globalstyles/globalstyles";
import fetchHouses from "./api/fetchhouses/fetchhouses";
import { House } from "./api/interfaces/house";

const App = () => {
  const [houses, setHouses] = React.useState<House[]>([]);

  React.useEffect(() => {
    const getHouses = async () => {
      const houses = await fetchHouses();
      setHouses(houses);
    };
    getHouses();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Grid>
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </Grid>
    </>
  );
};

export default App;
