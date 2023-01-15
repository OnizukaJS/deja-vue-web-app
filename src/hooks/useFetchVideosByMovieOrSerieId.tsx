import React, { useState, useEffect } from "react";
import VideosListModel from "../models/VideosListModel";

const useFetchVideosByMovieOrSerieId = (
  type: "movie" | "tv",
  id: string
): {
  videos: VideosListModel | undefined;
} => {
  const [videos, setVideos] = useState<VideosListModel | undefined>();

  useEffect(() => {
    async function fetchVideos() {
      try {
        await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((videos) => setVideos(videos as VideosListModel));
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, [id]);
  return { videos };
};

export default useFetchVideosByMovieOrSerieId;
