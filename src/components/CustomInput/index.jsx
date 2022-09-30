import React from "react";

// import packages
import {
  Box,
  TextField,
  Modal,
  Stack,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";

// icons
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";

// global context
import { useGlobalContext } from "../../contexts";

// import components
import RoomSlider from "./room-slider";

// import objects
import { style } from "./styles";

// formik validation
import validationSchema from "./form-handler/validation";

const CustomInput = () => {
  // context api
  const {
    modalIsOpen,
    setModalIsOpen,
    numberOfRooms,
    searchLocation,
    setSearchRequest,
  } = useGlobalContext();

  // hooks
  const formik = useFormik({
    initialValues: {
      sqft: "",
      bath: "",
      balcony: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ sqft, bath, balcony }) => {
      setSearchRequest((previous) => ({
        ...previous,
        name: searchLocation.name,
        sqft: sqft,
        bath: bath,
        balcony: balcony,
        bhk: numberOfRooms,
      }));
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, values, getFieldProps } =
    formik;

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "500px" }}>
          <Typography variant="h2" gutterBottom>
            Search Housing
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} gutterBottom>
                <Stack direction="row" spacing={2}>
                  {/* sqft */}
                  <TextField
                    fullWidth
                    type="number"
                    label="Sqft"
                    {...getFieldProps("sqft")}
                    error={Boolean(errors.sqft)}
                    helperText={touched.sqft && errors.sqft}
                  />

                  {/* bath */}
                  <TextField
                    type="number"
                    label="Bath"
                    {...getFieldProps("bath")}
                    error={Boolean(errors.bath)}
                    helperText={touched.bath && errors.bath}
                  />

                  {/* balcony */}
                  <TextField
                    type="number"
                    label="Balcony"
                    {...getFieldProps("balcony")}
                    error={Boolean(errors.balcony)}
                    helperText={touched.balcony && errors.balcony}
                  />
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
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Search
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CustomInput;
