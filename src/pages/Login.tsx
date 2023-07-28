import {
  Box,
  Container,
  Grid,
  useTheme,
  Stack,
  Typography,
    // useMediaQuery,
} from "@mui/material";
import LoginForm from "../components/LoginForm";
// import loginImage from "../assets/loginImage.svg";
// import LoginForm from "../components/LoginForm";
// import dvaultLogo from "../assets/dvaultLogo.svg";
// import { Theme } from "@mui/material/styles/createTheme";

function Login() {
  const theme = useTheme();
//   const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box>
      {/* {matches && (
        <h3 style={{ textAlign: "center" }}>
          content only available on Desktop mode
        </h3>
      )} */}
      <Container
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Stack
          sx={{
            marginTop: "20px",
          }}
        >
          <Box
            component="img"
            alt="Dvault"
            // src={dvaultLogo}
            sx={{
              width: "180px",
            }}
          />
        </Stack>
        <Grid
          container
          alignItems={"center"}
          sx={{
            marginTop: "80px",
          }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                margin: "20px auto",
              }}
            >
              <Box
                component={"img"}
                // src={loginImage}
                alt="Lock"
                sx={{
                  minHeight: "300px",
                  height: "24rem",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography
                variant="h3"
                color="initial"
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Welcome to DVAULT
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "#9092A3",
                  fontWeight: 500,
                }}
              >
                Access Your Dashboard and Tools
              </Typography>
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Login;
