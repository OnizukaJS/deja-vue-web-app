import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import HomePage from "./HomePage";
import MovieDetailsPage from "./MovieDetailsPage";
import PopularMoviesPage from "./PopularMoviesPage";
import PopularSeriesPage from "./PopularSeriesPage";
import TopRatedMoviesPage from "./TopRatedMoviesPage";
import TopRatedSeriesPage from "./TopRatedSeriesPage";

const Content = () => {
  return (
    <main style={{ marginTop: 100, padding: "0 24px" }}>
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route
          path={routes.movieDetails(":movieId")}
          element={<MovieDetailsPage />}
        />
        <Route path={routes.popularMovies} element={<PopularMoviesPage />} />
        <Route path={routes.popularSeries} element={<PopularSeriesPage />} />
        <Route path={routes.topRatedMovies} element={<TopRatedMoviesPage />} />
        <Route path={routes.topRatedSeries} element={<TopRatedSeriesPage />} />
      </Routes>
    </main>
  );
};

export default Content;
