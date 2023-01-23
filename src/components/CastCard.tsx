import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import CastModel from "../models/CastModel";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import noProfilePicture from "../images/no-profile-picture.png";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import noCastCardPicture from "../images/no-picture-available.png";

const useStyles = makeStyles(() =>
  createStyles({
    containerCast: {
      minHeight: 172.5,
      minWidth: 115,
      margin: "6px",
    },
    image: {
      height: 172.5,
      width: 115,
    },
  })
);

interface CastCardProps {
  cast: CastModel;
}

const CastCard = ({ cast }: CastCardProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const image =
    cast.profile_path !== null
      ? `https://www.themoviedb.org/t/p/original${cast?.profile_path}`
      : noCastCardPicture;

  return (
    <Card className={classes.containerCast}>
      <CardActionArea
        onClick={() => navigate(routes.castDetails(cast.id.toString()))}
        sx={{ height: "100%" }}
      >
        <Box sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={image}
            alt={cast?.name}
            className={classes.image}
          />
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>{cast?.name}</Typography>
            <Typography variant="caption">{cast?.character}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default CastCard;
