import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { Box } from "@mui/material";
import MenuComponent, { MenuProps } from "./MenuComponent";
import MenuItemModel from "../models/MenuItemModel";

const useStyles = makeStyles(() =>
  createStyles({
    containerMenus: {
      display: "flex",
      marginRight: 8,
    },
  })
);

const HeaderMenus = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const moviesMenuItems: MenuItemModel[] = [
    {
      icon: <TrendingUpIcon />,
      subMenuTitle: "Popular",
      navigateTo: routes.popularMovies,
    },
    {
      icon: <StarIcon />,
      subMenuTitle: "Top rated",
      navigateTo: routes.topRatedMovies,
    },
  ];

  const seriesMenuItems: MenuItemModel[] = [
    {
      icon: <TrendingUpIcon />,
      subMenuTitle: "Popular",
      navigateTo: routes.popularSeries,
    },
    {
      icon: <StarIcon />,
      subMenuTitle: "Top rated",
      navigateTo: routes.topRatedSeries,
    },
  ];

  return (
    <Box className={classes.containerMenus}>
      <MenuComponent menuTitle="Movies" menuItems={moviesMenuItems} />
      <MenuComponent menuTitle="Series" menuItems={seriesMenuItems} />
    </Box>
  );
};

export default HeaderMenus;
