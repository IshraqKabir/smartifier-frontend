import { makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {
  title: String;
}

const useStyles = makeStyles({
  root: {
    color: "white",
    fontSize: "small",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
        color: "black",
    }
  },
});

const NavItem: React.FC<IProps> = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.root}>{title}</div>;
};

export default NavItem;
