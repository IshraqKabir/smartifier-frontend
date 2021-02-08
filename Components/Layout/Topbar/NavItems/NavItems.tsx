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

const NavItems: React.FC<{ setShowLoading: Function }> = ({
  setShowLoading,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.navItemsContainer}>
      <NavItem title="Home" link="/" setShowLoading={setShowLoading} />
      <NavItem title="Quizzes" link="/" setShowLoading={setShowLoading} />
      <NavItem
        title="Blogs"
        link="/blog/posts"
        setShowLoading={setShowLoading}
      />
      <NavItem title="Testimonials" link="/" setShowLoading={setShowLoading} />
      <NavItem title="About" link="/" setShowLoading={setShowLoading} />
      <NavItem title="Meet The Team" link="/" setShowLoading={setShowLoading} />
    </div>
  );
};

export default NavItems;
