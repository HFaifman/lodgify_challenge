import React from "react";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import Spinner from "./components/spinner/spinner";
import GlobalStyles from "./commons/globalstyles/globalstyles";
import fetchHouses from "./api/fetchhouses/fetchhouses";
import { House } from "./api/interfaces/house";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [houses, setHouses] = React.useState<House[]>([]);

  React.useEffect(() => {
    const getHouses = async () => {
      const houses = await fetchHouses();
      setHouses(houses);
      setLoading(false);
    };
    getHouses();
  }, []);
  return (
    <>
      <GlobalStyles />
      {loading && (
        <StyledDiv>
          <Spinner />
        </StyledDiv>
      )}
      <Grid>
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </Grid>
    </>
  );
};

export default App;
