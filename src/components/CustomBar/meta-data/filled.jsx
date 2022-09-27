import React from "react";

// import packages
import { CardContent, Typography } from "@mui/material";

const Filled = ({ location, rooms, price }) => {
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h2" color="#fff">
          Housing Price :
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          Location ⮕ {location}
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          Rooms ⮕ {rooms}BHK
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          Price ⮕ ₹{price}
        </Typography>
      </CardContent>
    </>
  );
};

export default Filled;
