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
  } = useGlobalContext();

  return (
    <>
      <Card sx={{ backgroundColor: "#000" }}>
        {location && rooms > 0 && price > 0 ? (
          <Filled location={location} rooms={rooms} price={price} />
        ) : (
          <Blank />
        )}
      </Card>
    </>
  );
};

export default MetaData;
