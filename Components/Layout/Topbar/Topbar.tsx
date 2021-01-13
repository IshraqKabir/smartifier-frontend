import React from "react";

import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import NavItems from "./NavItems/NavItems";
import Login from "./NavItems/NavItem/Login/Login";

const useStyles = makeStyles({
  topbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
  },
});

const Topbar: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.topbarContainer}>
      <div>
        <Image src="/assets/logo.png" height={100} width={100} />
      </div>
      <NavItems />
      <Login />
    </div>
  );
};

export default Topbar;
