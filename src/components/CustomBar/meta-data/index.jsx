import React from "react";

// import global context
import { useGlobalContext } from "../../../contexts";

// import packages
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Container,
} from "@mui/material";

// import components
import Blank from "./blank";
import Filled from "./filled";

const MetaData = () => {
  // context-api
  const {
    housingInformation: { location, rooms, price },
    counter,
  } = useGlobalContext();

  return (
    <>
      <Card sx={{ backgroundColor: "#131515" }}>
        {location && rooms > 0 && price > 0 ? (
          <Filled location={location} rooms={rooms} price={price} />
        ) : location && counter > 0 ? (
          <Filled location={location} rooms={rooms} price="Not Found" />
        ) : (
          <Blank />
        )}
      </Card>
    </>
  );
};

export default MetaData;
