import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, FieldProps } from "formik";
import { TextError } from "./TextError";

interface InputProps {
  label: string;
  name: string;
  [key: string]: any;
}

function InputComponent({ label, name, ...rest }: InputProps) {
  return (
    <Box>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <>
            <Box
              component="label"
              htmlFor={name}
              sx={{
                display: "block",
                py: 1,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  fontWeight: 500,
                }}
              >
                {label}
              </Typography>
            </Box>
            <TextField
              error={!(form.errors[name] && form.touched[name])}
              id={name}
              {...rest}
              {...field}
              fullWidth
              sx={{
                "&.MuiTextField-root": {
                  background: "rgba(0, 0, 0, 0.04)",
                },
              }}
            />
            <ErrorMessage component={TextError} name={name} />
          </>
        )}
      </Field>
    </Box>
  );
}

export default InputComponent;
