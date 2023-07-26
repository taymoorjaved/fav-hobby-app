import React, { useEffect, useState } from "react";
import { readWeather } from "../../utils/functions";
import { WeatherData } from "./types";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";

type P = {
  location: string;
};

const WeatherTile: React.FC<P> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await readWeather(location);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, [location]);

  if (!weatherData) {
    return (
      <Box display="flex" justifyContent="center" minHeight="100px">
        <CircularProgress />
      </Box>
    );
  }

  const { current } = weatherData;
  return (
    <Box
      flex="1"
      borderRadius={4}
      p={2}
      boxShadow={1}
      sx={{ backgroundColor: "#f0f0f0" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {weatherData.location.name}
          </Typography>
          <Typography variant="body1">
            Temperature: {current.temp_c}°C
          </Typography>
          <Typography variant="body1">
            Feels like: {current.feelslike_c}°C
          </Typography>
        </Grid>
        <Grid item pl="8">
          <img src={current.condition.icon} alt={weatherData.location.name} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherTile;
