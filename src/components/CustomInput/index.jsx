import React from "react";

// import packages
import {
  Box,
  TextField,
  Modal,
  Stack,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

// icons
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";

// global context
import { useGlobalContext } from "../../contexts";

// import components
import RoomSlider from "./room-slider";

// style
import { style } from "./styles";

const Input = () => {
  // context api
  const { modalIsOpen, setModalIsOpen } = useGlobalContext();

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "500px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} gutterBottom>
              <Stack direction="row" spacing={2}>
                <TextField label="Sqft" />
                <TextField label="Bath" />
                <TextField label="Balcony" />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <RoomSlider />
            </Grid>

            <Grid item xs={12}>
              <Stack direction="row" spacing={3}>
                <Button
                  fullWidth
                  color="error"
                  variant="contained"
                  startIcon={<ClearIcon />}
                >
                  Cancel
                </Button>
                <Button fullWidth variant="contained" endIcon={<SendIcon />}>
                  Search
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Input;
