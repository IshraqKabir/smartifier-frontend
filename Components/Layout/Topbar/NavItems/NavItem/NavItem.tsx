import { makeStyles } from "@material-ui/core";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  title: String;
  link: String;
  setShowLoading: Function;
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

const NavItem: React.FC<IProps> = ({ title, link, setShowLoading }) => {
  const classes = useStyles();

  const router = useRouter();

  const handleClick = () => {
    if (router.pathname !== link) setShowLoading(true);
    router.push(`${link}`);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <Link href={`${link}`}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default NavItem;
