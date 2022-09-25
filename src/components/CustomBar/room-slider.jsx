import React from "react";

// import packages
import { Box, Chip, Stack, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

// icon\
import BusinessIcon from "@mui/icons-material/Business";

// Custom Pretto Slider
const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const RoomSlider = ({ roomSlider, setRoomSlider }) => {
  return (
    <>
      <Box mt={0.7}>
        <Stack direction="row" spacing={2}>
          <Chip icon={<BusinessIcon />} label={roomSlider} color="warning" />
          <PrettoSlider
            step={1}
            min={1}
            max={5}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={2}
            onChangeCommitted={(_, v) => setRoomSlider(v)}
          />
        </Stack>
      </Box>
    </>
  );
};

export default RoomSlider;
