import { Box } from "@mui/material";
import React from "react";

export function TextError(children: any) {
  return (
    <Box
      sx={{
        color: "red",
      }}
    >
      {children}
    </Box>
  );
}