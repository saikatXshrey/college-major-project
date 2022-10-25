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
import BathtubIcon from "@mui/icons-material/Bathtub";
import BalconyIcon from "@mui/icons-material/Balcony";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";

const Filled = ({ location, sqft, bath, balcony, rooms, price }) => {
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

        {/* location */}
        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="info" icon={<RoomIcon />} label="Location " />
          {"\t"}⮕ {location}
        </Typography>

        {/* area */}
        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="secondary" icon={<RoofingRoundedIcon />} label="Area " />
          {"\t"}⮕ {sqft} Sqft
        </Typography>

        {/* bath */}
        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="primary" icon={<BathtubIcon />} label="Bath " />
          {"\t"}⮕ {bath}
        </Typography>

        {/* balcony */}
        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="warning" icon={<BalconyIcon />} label="Balcony " />
          {"\t"}⮕ {balcony}
        </Typography>

        {/* rooms */}
        <Typography gutterBottom variant="h6" color="#fff">
          <Chip color="success" icon={<ChairIcon />} label="Rooms" />
          {"\t"}⮕ {rooms}BHK
        </Typography>

        {/* price */}
        {isNaN(price) ? (
          <Typography gutterBottom variant="h6" color="#fff">
            <Chip color="error" icon={<MonetizationOnIcon />} label="Price" />
            {"\t"}⮕ {price}
          </Typography>
        ) : (
          <Typography gutterBottom variant="h6" color="#fff">
            <Chip color="error" icon={<MonetizationOnIcon />} label="Price" />
            {"\t"}⮕ ₹ {price} LAKH💲
          </Typography>
        )}
      </CardContent>
    </>
  );
};

export default Filled;
