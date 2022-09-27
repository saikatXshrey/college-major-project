import React from "react";

// import packages
import {
  Chip,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

// icons
import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChairIcon from "@mui/icons-material/Chair";

const Filled = ({ location, rooms, price }) => {
  // image link
  const image_link = `https://source.unsplash.com/1920x1080/?${location}`;
  const magic_bricks_link = `https://www.magicbricks.com/${location}-in-Bangalore-Overview`;

  return (
    <>
      <CardActionArea href={magic_bricks_link} target="_blank">
        <CardMedia component="img" image={image_link} alt="bangalore" />
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="h2" color="#fff">
          Housing Price :
        </Typography>

        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="info" icon={<RoomIcon />} label="Location " />
          {"\t"}⮕ {location}
        </Typography>

        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="success" icon={<ChairIcon />} label="Rooms" />
          {"\t"}⮕ {rooms}BHK
        </Typography>

        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="error" icon={<MonetizationOnIcon />} label="Price" />
          {"\t"}⮕ ₹{price}
        </Typography>
      </CardContent>
    </>
  );
};

export default Filled;
