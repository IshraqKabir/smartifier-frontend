import React from "react";
import { makeStyles } from "@material-ui/core";

import NavItem from "./NavItem/NavItem";

interface IProps {
  setShowLoading: Function;
}

const useStyles = makeStyles({
  navItemsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    fontSize: "small",
    overflow: "hidden",
  },
});

const NavItems: React.FC<IProps> = ({ setShowLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.navItemsContainer}>
      <NavItem title="Home" link="/" setShowLoading={setShowLoading} />
      <NavItem title="Quizzes" link="/quizzes" setShowLoading={setShowLoading} />
      <NavItem
        title="Blog"
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
