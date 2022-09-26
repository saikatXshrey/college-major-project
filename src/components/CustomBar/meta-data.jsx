import React from "react";

// import packages
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Container,
} from "@mui/material";

const MetaData = () => {
  return (
    <>
      {/* <Container> */}
      {/* <Box m={0.8}> */}
      <Card sx={{ backgroundColor: "#000" }}>
        <CardContent>
          <Typography variant="h2" color="#fff">
            Big Talks
          </Typography>
        </CardContent>
      </Card>
      {/* </Box> */}
      {/* </Container> */}
    </>
  );
};

export default MetaData;
