import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PersonListModel from "../models/PersonListModel";
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

const PersonSearch = ({ person }: { person: PersonListModel }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.containerCard}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          onClick={() => navigate(routes.castDetails(person.id.toString()))}
          sx={{ display: "flex", justifyContent: "start", cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            image={`https://www.themoviedb.org/t/p/original${person.profile_path}`}
            alt={person.name}
            className={classes.image}
            sx={{ width: 100 }}
          />
        </Box>
        <CardContent>
          <Typography>
            <Link
              to={routes.castDetails(person.id.toString())}
              style={{ fontWeight: "bold", color: "black" }}
            >
              {person.name}
            </Link>
          </Typography>
          <Typography variant="caption">
            {person.known_for_department}
          </Typography>
          <Typography>
            Known for:{" "}
            {person.known_for.map((knownFor, key) => (
              <>
                <Link
                  to={
                    knownFor.media_type === "movie"
                      ? routes.movieDetails(knownFor.id.toString())
                      : routes.serieDetails(knownFor.id.toString())
                  }
                >
                  {knownFor.original_title}
                </Link>
                {key < person.known_for.length - 1 && (
                  <Typography
                    variant="caption"
                    sx={{ marginLeft: 1, marginRight: 1 }}
                  >
                    •
                  </Typography>
                )}
              </>
            ))}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PersonSearch;
