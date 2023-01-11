import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import CastDetailsPage from "./CastDetailsPage";
import HomePage from "./HomePage";
import MovieDetailsPage from "./MovieDetailsPage";
import PopularMoviesPage from "./PopularMoviesPage";
import PopularSeriesPage from "./PopularSeriesPage";
import SerieDetailsPage from "./SerieDetailsPage";
import TopRatedMoviesPage from "./TopRatedMoviesPage";
import TopRatedSeriesPage from "./TopRatedSeriesPage";

const Content = () => {
  return (
    <main style={{ marginTop: 100 }}>
      <Routes>
        <Route
          path={routes.castDetails(":castId")}
          element={<CastDetailsPage />}
        />
        <Route path={routes.homePage} element={<HomePage />} />
        <Route
          path={routes.movieDetails(":movieId")}
          element={<MovieDetailsPage />}
        />
        <Route
          path={routes.serieDetails(":serieId")}
          element={<SerieDetailsPage />}
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
