import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles(() =>
  createStyles({
    containerRate: {
      display: "flex",
      backgroundColor: "#000",
      color: "#fff",
      padding: "2px 16px 0",
      borderRadius: 4,
      marginLeft: 8,
    },
  })
);

interface RateBadgeReviewProps {
  rate: number;
}

const RateBadgeReview = ({ rate }: RateBadgeReviewProps) => {
  const classes = useStyles();

  return (
    <span className={classes.containerRate}>
      <StarIcon fontSize="small" /> {rate}
    </span>
  );
};

export default RateBadgeReview;
