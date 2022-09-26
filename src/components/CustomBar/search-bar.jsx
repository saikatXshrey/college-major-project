import React, { useState } from "react";

// import packages
import {
  OutlinedInput,
  InputLabel,
  IconButton,
  Grid,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
// import Geocoder from "react-map-gl-geocoder";

// icon
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

// import components
import RoomSlider from "./room-slider";

// yup validation object
const validationSchema = yup.object({
  search_field: yup.string().required("Location Required!"),
});

const SearchBar = () => {
  // state
  const [roomSlider, setRoomSlider] = useState(2);

  console.log(roomSlider);

  // formik handler
  const formik = useFormik({
    initialValues: {
      search_field: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(values.search_field);
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          {/* search-bar */}
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="search_field">Search</InputLabel>
              {/* <Geocoder /> */}
              <OutlinedInput
                fullWidth
                label="Search"
                type="search_field"
                id="search_field"
                {...getFieldProps("search_field")}
                error={Boolean(errors.search_field)}
                helperText={touched.search_field && errors.search_field}
                endAdornment={
                  <IconButton type="submit" color="primary">
                    <TravelExploreIcon />
                  </IconButton>
                }
              />
            </FormControl>
          </Grid>

          {/* room-slider */}
          <Grid item xs={12}>
            <RoomSlider roomSlider={roomSlider} setRoomSlider={setRoomSlider} />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SearchBar;
