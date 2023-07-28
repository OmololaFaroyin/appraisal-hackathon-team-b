import { ReactNode, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { useRequest } from "../hooks/request.hook";
import MetricCard from "./MetricCard";
import logout from "../assets/logout.svg"
// import { toast } from "react-toastify";
// import { useAppDispatch } from "../../service/hook/hooks";
// import { useRequest } from "../../service/hook/request.hook";
// import { userLogoutAction } from "../../service/store/user_profile.slice";
// import Loading from "../../components/loading";

interface IndicatorData {
  id: number;
  image: ReactNode;
  total: string;
  bgColor: string;
  text: string;
}

function MetricIndicators() {
  const [indicatorsData, setIndicatorsData] = useState<IndicatorData[] | null>(
    []
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    state: { loading, success, data },
    makeRequest,
  } = useRequest();

  useEffect(() => {
    setIndicatorsData([
      {
        id: 1,
        image: logout,
        total: "Hey",
        // total: data?.verified,
        bgColor: "#A5D6A7",
        text: "Performance Metrics",
      },
      {
        id: 2,
        image: logout,
        total: "Hey",
        // total: data?.verified,
        bgColor: "#A5D6A7",
        text: "Performance Metrics",
      },
    ]);
    // let totalMetricUrl = "/api/v1/dvault/__kyc_metrics";
    // makeRequest(totalMetricUrl);
    // if (success) {
    //   setIndicatorsData([
    //     {
    //       id: 1,
    //       image: logout,
    //       total: "Hey",
    //       // total: data?.verified,
    //       bgColor: "#A5D6A7",
    //       text: "Total verified",
    //     },
    //     {
    //       id: 2,
    //       image: logout,
    //       total: "Hey",
    //       // total: data?.verified,
    //       bgColor: "#A5D6A7",
    //       text: "Total verified",
    //     },
    //   ]);
    // }
  }, [navigate, dispatch, success]);
  
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        sx={{
          marginTop: "30px",
        }}
      >
        {indicatorsData &&
          indicatorsData.map((data) => {
            const { id, image, total, bgColor, text } = data;
            return (
              <Grid
                item
                xs={6}
                md={3.5}
                key={id}
                sx={{
                  maxWidth: "300px",
                  marginRight: "40px",
                }}
              >
                <MetricCard
                  src={image}
                  total={total}
                  bgColor={bgColor}
                  text={text}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default MetricIndicators;
