import React from "react";

import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import NavItem from "./NavItems/NavItem/NavItem";
import NavItems from "./NavItems/NavItems";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
    width: "100%",
    borderRadius: "0 0 30px 0",
  },
});

const useImageStyles = makeStyles({
  root: {
    marginLeft: "5%",
  },
});

const Topbar: React.FC<{}> = () => {
  const classes = useStyles();
  const imageClasses = useImageStyles();

  return (
    <div className={classes.root}>
      <div className={imageClasses.root}>
        <Image src="/assets/logo.png" height={100} width={100} />
      </div>
      <NavItems />
    </div>
  );
};

export default Topbar;
