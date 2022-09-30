import React from "react";

// import global context
import { useGlobalContext } from "../../../contexts";

// import packages
import { Card } from "@mui/material";

// import components
import Blank from "./blank";
import Filled from "./filled";

const MetaData = () => {
  // context-api
  const {
    housingInformation: { location, sqft, bath, balcony, rooms, price },
    counter,
  } = useGlobalContext();

  return (
    <>
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
            price="Not Found!"
            rooms={rooms}
          />
        ) : (
          <Blank />
        )}
      </Card>
    </>
  );
};

export default MetaData;
