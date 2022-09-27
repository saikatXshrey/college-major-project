import React from "react";

// import packages
import { CardContent, CardMedia, Typography } from "@mui/material";

const Filled = ({ location, rooms, price }) => {
  // image link
  const image_link = `https://source.unsplash.com/1920x1080/?${location}`;

  return (
    <>
      <CardMedia
        component="img"
        //   height="140"
        image={image_link}
        alt="bangalore"
      />

      <CardContent>
        <Typography gutterBottom variant="h2" color="#fff">
          Housing Price :
        </Typography>

        {/* <br /> */}

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
