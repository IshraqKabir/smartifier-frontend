import { makeStyles } from "@material-ui/core";
import React from "react";

import Link from "next/link";

interface IProps {
  title: String;
  link: String;
}

const useStyles = makeStyles({
  root: {
    color: "white",
    fontSize: "small",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      transition: "0.3s",
      fontSize: 16,
    },
  },
});

const NavItem: React.FC<IProps> = ({ title, link }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href={`${link}`}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default NavItem;
