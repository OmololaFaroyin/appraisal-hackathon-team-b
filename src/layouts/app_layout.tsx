import { Box, Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { ReactNode } from "react";
// import { SIGNIN_ROUTE } from "../utils/routes";
import SideBar from "../components/nav/sidebar";
import Navbar from "../components/nav/navbar";
import { useAppSelector } from "../hooks/hooks";

export interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme();
  // const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.profileSliceReducer);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  // useEffect(() => {
  //   !token 
  //   && navigate(SIGNIN_ROUTE);
  // }, [token]);

  return (
    <>
      {matches && (
        <h3 style={{ textAlign: "center" }}>
          content only available on Desktop mode
        </h3>
      )}
      <Grid
        container
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Grid
          item
          xs={2.5}
          sx={{
            height: "100vh",
            position: "sticky",
            top: 0,
          }}
        >
          <SideBar />
        </Grid>
        <Grid item xs={9.5} sx={{ background: "#F3F3F3" }}>
          <Navbar />
          <Box
            sx={{
              px: 6,
              background: "#F5F5F5",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
