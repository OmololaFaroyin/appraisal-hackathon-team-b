import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControl from "./forms/FormControl";

type LoginValues = {
  username: string;
  password: string;
};

const LoginForm = () => {

  const initialValues: LoginValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: LoginValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { dirty, isValid } = formik;
          return (
            <Form>
              <Box>
                <FormControl
                  control={"input"}
                  label="Username"
                  name="username"
                />
                <FormControl
                  control={"input"}
                  label={"Password"}
                  name="password"
                  type="password"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!dirty || !isValid}
                  fullWidth
                  sx={{
                    "&.MuiButton-root": {
                      borderRadius: "7px",
                      my: 3,
                      color: "#ffffff",
                      textTransform: "capitalize",
                    },
                  }}
                >
                  {formik.isSubmitting ? (
                    <CircularProgress size={35} color="secondary" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
