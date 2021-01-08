import React from "react";
import { makeStyles } from "@material-ui/core";

import NavItem from "./NavItem/NavItem";

const useStyles = makeStyles({
  root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: '30%',
      marginLeft: '5%'
  },
});

const NavItems: React.FC<{}> = () => {
  const classes = useStyles();
  return <div className={classes.root}>
      <NavItem title="Quizzes" />
      <NavItem title="Blogs" />
      <NavItem title="Testimonials" />
      <NavItem title="About" />
      <NavItem title="Meet The Team" />
  </div>;
};

export default NavItems;
