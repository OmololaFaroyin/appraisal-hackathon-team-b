import { useState } from "react";
import { Stack, Typography, Box, Paper, Popover, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Theme } from "@mui/material/styles/createTheme";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProfile, userLogoutAction } from "../../store/user_profile.slice";

const CustomNavDropdown = () => {
    const { user }: IProfile = useAppSelector((state) => state.profileSliceReducer);
    const dispatch = useAppDispatch();
    const theme: Theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null>(null);

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const idPop = open ? "simple-popover" : undefined;

  return (
    <>
      <ArrowDropDownIcon onClick={handleClick} />
      <Popover
        id={idPop}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            "&.MuiPaper-root": {
              width: "250px",
              p: 2,
            },
          }}
        >
          <Stack>
            <Box>
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: "2.5rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "1.3rem",
                  my: 2,
                }}
              >
                {/* {user?.first_name} {user?.last_name} */}
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  my: 1,
                }}
              >
                {user?.email} 
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  my: 1,
                  color: `${theme.palette.common.flagIcon}`,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => dispatch(userLogoutAction())}
              >
                Sign out
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Popover>
    </>
  );
};
export default CustomNavDropdown;
