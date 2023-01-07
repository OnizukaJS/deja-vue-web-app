import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles(() =>
  createStyles({
    circularProgress: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "38px !important",
      height: "38px !important",

      "& .MuiCircularProgress-root": {
        color: "red",
      },
    },
    containerRate: {
      position: "absolute",
      left: 10,
      width: 38,
      height: 38,
      boxSizing: "border-box",
    },
    icon: {
      color: "#fff",
      paddingTop: 1,
      paddingLeft: 1,
      fontSize: "0.6em",
    },
    image: {
      borderRadius: 4,
    },
    outerRing: {
      width: 38,
      height: 38,
      backgroundColor: "#081c22",
      borderRadius: "50%",
      padding: 2,
    },
    percent: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    userRate: {
      position: "relative",
      display: "inline-block",
      width: "100%",
      height: "100%",
      textAlign: "center",
    },
  })
);

interface RateBadgeProps {
  rate: number;
}

const RateBadge = ({ rate }: RateBadgeProps) => {
  const classes = useStyles();
  const percentage = rate * 10;

  let color = "";

  const defineColor = (percentage: number) => {
    if (percentage < 70 && percentage >= 40) {
      color = "yellow";
    } else if (percentage < 40) {
      color = "red";
    } else {
      color = "#1976d2";
    }

    return color;
  };

  return (
    <Box className={classes.containerRate}>
      <Box className={classes.outerRing}>
        <Box className={classes.userRate}>
          <Box className={classes.percent}>
            <span className={classes.icon}>{percentage} %</span>
            <CircularProgress
              variant="determinate"
              value={percentage}
              className={classes.circularProgress}
              style={{ color: defineColor(percentage) }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RateBadge;
