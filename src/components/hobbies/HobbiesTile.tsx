import React from "react";
import { Box, Typography } from "@mui/material";
import { HobbiesData } from "./hobbiesConfig";
import { makeStyles } from "@mui/styles";

type P = {
  data: HobbiesData;
};

const HobbiesTile: React.FC<P> = ({ data }) => {
  const styles = useStyles();
  return (
    <Box
      boxShadow={2}
      className={styles.wrapper}
      width={{ xs: "fit", sm: "40%", md: "30%", lg: "20%" }}
      p={2}
      borderRadius={4}
    >
      <img src={data.imgPath} alt={data.name} className={styles.img} />
      <Typography variant="h5" my={2} className={styles.title}>
        {data.name}
      </Typography>
      <Typography mb={2} variant="body1">
        {data.details}
      </Typography>
    </Box>
  );
};

export default HobbiesTile;

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#f0f0f0",
  },
  img: { height: "auto", width: "100%", borderRadius: "14px" },
  title: {
    width: "fit-content",
    backgroundColor: "#64ffb1",
    padding: "0px 16px",
  },
});
