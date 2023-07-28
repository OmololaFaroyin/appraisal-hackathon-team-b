import { Box, Paper, Grid, Stack, Typography, useTheme } from "@mui/material";

interface IndicatorData {
  src: any;
  total: string;
  bgColor: string;
  text: string;
}

function MetricCard({ src, total, bgColor, text }: IndicatorData) {
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          borderRadius: "13px",
          px: 2,
          py: 2,
        }}
      >
        <Grid container alignItems={"center"} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={12} lg={3}>
            <Box component={"span"}>
              <Box
                component={"img"}
                src={src}
                sx={{
                  [theme.breakpoints.down("lg")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },

                  border: "20px solid transparent",
                  display: "block",
                  height: "2.7rem",
                  width: "2.7rem",
                  overflow: "visible",
                  borderRadius: "50%",
                  background: `${bgColor}`,
                  margin: "10px 0",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6.9}>
            <Stack>
              <Typography>{text || "hey"}</Typography>
              <Typography
                variant="h4"
                sx={{
                  [theme.breakpoints.down("lg")]: {
                    textAlign: "center",
                  },
                  fontWeight: 500,
                }}
              >
                {total || "hey"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default MetricCard;
