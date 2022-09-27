import React from "react";

// import packages
import { Chip, CardContent, CardMedia, Typography } from "@mui/material";

// icons
import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChairIcon from "@mui/icons-material/Chair";

const Filled = ({ location, rooms, price }) => {
  // image link
  const image_link = `https://source.unsplash.com/1920x1080/?${location}`;

  return (
    <>
      <CardMedia component="img" image={image_link} alt="bangalore" />

      <CardContent>
        <Typography gutterBottom variant="h2" color="#fff">
          Housing Price :
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          <Chip color="info" icon={<RoomIcon />} label="Location " />
          {"\t"}⮕ {location}
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          <Chip color="success" icon={<ChairIcon />} label="Rooms" />
          {"\t"}⮕ {rooms}BHK
        </Typography>

        <Typography gutterBottom variant="h5" color="#fff">
          <Chip color="error" icon={<MonetizationOnIcon />} label="Price" />
          {"\t"}⮕ ₹{price}
        </Typography>
      </CardContent>
    </>
  );
};

export default Filled;
