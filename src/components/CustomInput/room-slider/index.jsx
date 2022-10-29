import React from "react";

// import global context
import { useGlobalContext } from "../../../contexts";

// import packages
import { Box, Chip, Stack } from "@mui/material";

// icon
import BusinessIcon from "@mui/icons-material/Business";

// import components
import PrettoSlider from "./styles";

const RoomSlider = () => {
  // context-api
  const { numberOfRooms, updateRoomSlider } = useGlobalContext();

  return (
    <>
      <Box mt={0.7} mr={1}>
        <Stack direction="row" spacing={2}>
          <Chip icon={<BusinessIcon />} label={numberOfRooms} color="warning" />
          <PrettoSlider
            step={1}
            min={1}
            max={10}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={2}
            onChangeCommitted={(_, v) => updateRoomSlider(v)}
          />
        </Stack>
      </Box>
    </>
  );
};

export default RoomSlider;
