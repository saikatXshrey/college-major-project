import React from "react";

// import packages
import { Box, Grid, Card } from "@mui/material";

// import components
import CustomInput from "./components/CustomInput";
import CustomMap from "./components/CustomMap";
import CustomBar from "./components/CustomBar";

const App = () => {
  return (
    <Box m={0.8}>
      <Card
        m={1}
        sx={{
          backgroundColor: "#000",
        }}
      >
        {/* modal input */}
        <CustomInput />

        <Grid container spacing={0.9}>
          {/* map-box custom map */}
          <Grid item lg={9} sm={9} xs={12}>
            <CustomMap />
          </Grid>

          {/* display result */}
          <Grid item lg={3} sm={3} xs={12}>
            <CustomBar />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default App;
