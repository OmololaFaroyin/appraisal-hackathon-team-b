import { Box, Divider, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import CustomNavLink from "./navlink";
import flash from "../../assets/flash-circle.svg";
import clock from "../../assets/clock.svg";
import login from "../../assets/login.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { theme } from "../../theme/Theme";
// import {
//   canUserUseTMS,
//   canUserUseAMS,
// } from '../../service/helper/tms_functions.helper';
// import { useAppSelector } from '../../service/hook/hooks';

const sideBarItems = [
  {
    title: "Dashboard",
    // route: flash,
    image: flash,
  },
  {
    title: "Appraisal history",
    // route: clock,
    image: clock,
  },
  // canUserUseAMS(role) &&
  {
    title: "Settings",
    // route: ASSET_ROUTE,
    image: clock,
  },
];

const SideBar: React.FC = () => {
  // const { role: myRole = '' } = useAppSelector(
  //   (state) => state.profileSliceReducer
  // );

  return (
    <Box sx={{ px: 2, height: "inherit", border: "1px solid #f3f3f3" }}>
      <Stack
        sx={{
          marginTop: "15px",
        }}
      >
        <Box
          component="img"
          alt="Appraisa"
          src={logo}
          sx={{
            margin: "0 auto",
          }}
        />
      </Stack>

      <Box
        sx={{
          mt: 3,
          height: "85%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Box>
          {sideBarItems.map((item, index) => {
            return (
              <CustomNavLink key={index} route={item.title} image={item.image}>
                {item.title}
              </CustomNavLink>
            );
          })}
        </Box>

        <Stack
          direction={"column"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              // flexDirection: "column",
            }}
          >
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: "2rem",
                marginRight: "10px",
              }}
            />
            <Stack
              direction={"column"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              sx={{ mr: "20px" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Jane Copper
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  my: 1,
                  color: "#C0C0C6",
                  // fontSize: "14px"
                }}
              >
                Sales analyst
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Divider />
            </Box>

            <Stack direction={"row"} sx={{ marginTop: "10px" }}>
              <Box component={"img"} src={login} sx={{ marginRight: "20px" }} />
              <Typography
                variant="body2"
                sx={{
                  my: 1,
                  mr: "40px",
                  color: `${theme.palette.common.black}`,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                // onClick={() => dispatch(logoutUser())}
              >
                Logout
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default SideBar;
