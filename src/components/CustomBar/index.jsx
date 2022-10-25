import React from "react";

// import packages
import { Box, Grid } from "@mui/material";

// import components
import MetaData from "./meta-data";
import RoomSlider from "./room-slider";

const CustomBar = () => {
  return (
    <>
      <Box
        mt={3.8}
        sx={{
          width: "96%",
          height: "100%",
          padding: 0.8,
        }}
      >
        <Grid container spacing={5}>
          {/* <Grid item xs={12}>
            <RoomSlider />
          </Grid> */}

          <Grid item xs={12}>
            <MetaData />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomBar;
