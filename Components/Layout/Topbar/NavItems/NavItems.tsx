import React from "react";
import { makeStyles } from "@material-ui/core";

import NavItem from "./NavItem/NavItem";

const useStyles = makeStyles({
  navItemsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    color: "white",
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
      <NavItem title="Home" link="/" />
      <NavItem title="Quizzes" link="/" />
      <NavItem title="Blogs" link="/blog/posts" />
      <NavItem title="Testimonials" link="/" />
      <NavItem title="About" link="/" />
      <NavItem title="Meet The Team" link="/" />
    </div>
  );
};

export default NavItems;
