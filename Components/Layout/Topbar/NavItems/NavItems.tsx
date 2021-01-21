import React from "react";
import { makeStyles } from "@material-ui/core";

import NavItem from "./NavItem/NavItem";

const useStyles = makeStyles({
  navItemsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    fontSize: "small",
    ["@media (max-width: 700px)"]: {
      display: "none",
    },
  },
});

const NavItems: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.navItemsContainer}>
      <NavItem title="Quizzes" />
      <NavItem title="Blogs" />
      <NavItem title="Testimonials" />
      <NavItem title="About" />
      <NavItem title="Meet The Team" />
    </div>
  );
};

export default NavItems;
