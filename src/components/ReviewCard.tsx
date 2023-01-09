import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import ReviewModel from "../models/ReviewModel";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import RateBadgeReview from "./RateBadgeReview";

const useStyles = makeStyles(() =>
  createStyles({
    containerReview: {
      display: "flex",
    },
    image: {
      height: 75,
      width: 75,
      borderRadius: "50%",
    },
  })
);

interface ReviewCardProps {
  review?: ReviewModel;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.containerReview}>
      <CardMedia
        component="img"
        image={`https://www.themoviedb.org/t/p/original${review?.author_details.avatar_path}`}
        alt={review?.author}
        className={classes.image}
        sx={{ width: 75 }}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold", display: "flex" }}>
          A review by {review?.author}{" "}
          {review?.author_details.rating && (
            <RateBadgeReview rate={review.author_details.rating} />
          )}
        </Typography>
        <Typography variant="caption">
          Written by{" "}
          <span style={{ fontWeight: "bold" }}>{review?.author}</span> on{" "}
          {review?.created_at}
        </Typography>
        <Typography variant="body2">{review?.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
