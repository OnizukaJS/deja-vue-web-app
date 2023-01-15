import React from "react";
import { useEffect, useState } from "react";
import ReviewsListModel from "../models/ReviewsListModel";

const useFetchReviews = (
  type: "movie" | "tv",
  id: string
): {
  areReviewsLoading: boolean;
  reviews: ReviewsListModel | undefined;
} => {
  const [areReviewsLoading, setAreReviewsLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<ReviewsListModel | undefined>();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setAreReviewsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((credits) => setReviews(credits as ReviewsListModel))
          .then(() => setAreReviewsLoading(false));
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [id]);

  return { areReviewsLoading, reviews };
};

export default useFetchReviews;
