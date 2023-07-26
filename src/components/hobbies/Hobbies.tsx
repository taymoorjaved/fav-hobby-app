import React from "react";
import { Box, Typography } from "@mui/material";
import { favHobbies } from "./hobbiesConfig";
import HobbiesTile from "./HobbiesTile";

const Hobbies: React.FC = () => {
  return (
    <>
      <Typography m={4} align="center" variant="h5">
        Favorite Hobbies
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={4}
        m={4}
      >
        {favHobbies.map((h, i) => (
          <HobbiesTile key={i} data={h} />
        ))}
      </Box>
    </>
  );
};

export default Hobbies;
