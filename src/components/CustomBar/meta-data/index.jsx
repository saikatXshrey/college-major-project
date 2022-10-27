import React from "react";

import { ThemeProvider } from "@mui/material/styles";

// import global context
import { useGlobalContext } from "../../../contexts";

// import packages
import { Card, Grid, Typography } from "@mui/material";

// import react-boostrap
import { Image } from "react-bootstrap";

// import components
import Blank from "./blank";
import Filled from "./filled";

// import logo
import logo from "../../../assets/img/logoHousez.png";

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
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Image src={logo} width="69" responsive />
          </Grid>

          <Grid item xs={10}>
            <Typography variant="h1" color="error" gutterBottom>
              Housez
            </Typography>
          </Grid>
        </Grid>

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
              price="Not Found !"
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
