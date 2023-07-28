import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";

interface CustomLinkProps {
  children?: ReactNode;
  text?: string;
  route: string;
  styles?: { [key: string]: any };
  image: any;
}

const CustomNavLink: React.FC<CustomLinkProps> = ({
  children,
  text,
  route,
  styles,
  image,
}) => (
  <NavLink
    to={route}
    style={{ color: "inherit", textDecoration: "none", ...styles }}
  >
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        my: 2,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        paddingLeft: "60px",
        borderRadius: "10px",
      }}
    >
      <Grid item xs={10} sx={{ display: "flex" }}>
        <Box component={"img"} src={image} />
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#C0C0C6",
            paddingLeft: "10px",
          }}
        >
          {text || children}
        </Typography>
      </Grid>
    </Grid>
  </NavLink>
);
export default CustomNavLink;
