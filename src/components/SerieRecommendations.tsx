import React from "react";
import SerieRecommendationModel from "../models/SerieRecommendationModel";

interface SerieRecommendationsProps {
  serie: SerieRecommendationModel;
}

const SerieRecommendations = ({ serie }: SerieRecommendationsProps) => {
  return <div>{serie.name}</div>;
};

export default SerieRecommendations;
