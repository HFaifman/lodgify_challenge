import React from "react";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import Paragraph from "./components/paragraph/paragraph";
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
  const [loading, setLoading] = React.useState({
    fetching: true,
    error: false,
  });
  const [houses, setHouses] = React.useState<House[]>([]);

  React.useEffect(() => {
    const getHouses = async () => {
      try {
        const houses = await fetchHouses();
        setHouses(houses);
        setLoading({ fetching: false, error: false });
      } catch (error) {
        setLoading({ fetching: false, error: true });
      }
    };
    getHouses();
  }, []);

  const { fetching, error } = loading;
  return (
    <>
      <GlobalStyles />
      {fetching && (
        <StyledDiv>
          <Spinner />
        </StyledDiv>
      )}
      {error && (
        <StyledDiv>
          <Paragraph text="There was an error while fetching :(" />
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
