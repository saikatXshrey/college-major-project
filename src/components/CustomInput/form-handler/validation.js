// import packages
import * as yup from "yup";

// yup validation object
const validationSchema = yup.object({
  sqft: yup.string().required("Sqft is required"),
  bath: yup.string().required("Bath is required"),
  balcony: yup.string().required("Balcony is required"),
});

export default validationSchema;
