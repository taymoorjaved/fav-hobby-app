import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import WeatherTile from "./WeatherTile";

const Weather: React.FC = () => {
  return (
    <Fragment>
      <Typography align="center" m={4} variant="h5">
        Weather Updates
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={4}
        m={4}
      >
        <WeatherTile location="Berlin" />
        <WeatherTile location="New york" />
        <WeatherTile location="Lahore" />
      </Box>
    </Fragment>
  );
};

export default Weather;
