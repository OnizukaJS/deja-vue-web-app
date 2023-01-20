import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import SerieListModel from "../models/SerieListModel";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    containerCard: {
      margin: "1em 24px 1em 0",
    },
    image: {
      borderRadius: 4,
      minHeight: 150,
    },
  })
);

const SerieSearch = ({ serie }: { serie: SerieListModel }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const truncate = (overview: string, maxLength: number) => {
    return overview.length > maxLength
      ? overview.slice(0, maxLength - 1) + "..."
      : overview;
  };

  return (
    <Card className={classes.containerCard}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          onClick={() => navigate(routes.serieDetails(serie.id.toString()))}
          sx={{ display: "flex", justifyContent: "start", cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            image={`https://www.themoviedb.org/t/p/original${serie.poster_path}`}
            alt={serie.name}
            className={classes.image}
            sx={{ width: 100 }}
          />
        </Box>
        <CardContent>
          <Typography>
            <Link
              to={routes.serieDetails(serie.id.toString())}
              style={{ fontWeight: "bold", color: "black" }}
            >
              {serie.name}
            </Link>
          </Typography>
          <Typography variant="caption">{serie.first_air_date}</Typography>
          <Typography>{truncate(serie.overview, 200)}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SerieSearch;
