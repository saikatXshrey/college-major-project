import React from "react";

import { ThemeProvider } from "@mui/material/styles";

// import global context
import { useGlobalContext } from "../../../contexts";

// import packages
import { Card, Typography } from "@mui/material";

// import components
import Blank from "./blank";
import Filled from "./filled";

// theme
import theme from "./theme";

const MetaData = () => {
  // context-api
  const {
    housingInformation: { location, sqft, bath, balcony, rooms, price },
    counter,
  } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" color="error" gutterBottom>
          💲Housez💲
        </Typography>
        <Card sx={{ backgroundColor: "#131515" }}>
          {location && rooms > 0 && price > 0 ? (
            <Filled
              location={location}
              sqft={sqft}
              bath={bath}
              balcony={balcony}
              price={price}
              rooms={rooms}
            />
          ) : location && counter > 0 ? (
            <Filled
              location={location}
              sqft={sqft}
              bath={bath}
              balcony={balcony}
              price={Math.abs(price)}
              rooms={rooms}
            />
          ) : (
            <Blank />
          )}
        </Card>
      </ThemeProvider>
    </>
  );
};

export default MetaData;
