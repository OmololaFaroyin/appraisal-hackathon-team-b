import { Stack } from "@mui/material";

const Navbar = () => {
  // const { user }: IProfile = useAppSelector(
  //   (state) => state.profileSliceReducer
  // );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        px: 4,
        py: 4,
        background: "#FFFFFF",
        borderBottom: "1px solid #f3f3f3",
      }}
    ></Stack>
  );
};

export default Navbar;
