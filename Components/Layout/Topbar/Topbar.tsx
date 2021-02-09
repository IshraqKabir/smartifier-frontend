import React, { useState } from "react";

import { LinearProgress, makeStyles } from "@material-ui/core";
import Image from "next/image";
import NavItems from "./NavItems/NavItems";
import Login from "./NavItems/NavItem/Login/Login";

const useStyles = makeStyles({
  topbarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    maxHeight: 100,
    borderBottomRightRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    zIndex: 4000,
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
  },
  placeholder: {
    position: "relative",
    top: 0,
    left: 0,
    marginRight: 100,
    width: "100%",
    height: 100,
    background:
      "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box",
  },
});

const Topbar: React.FC<{}> = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const classes = useStyles();

  return (
    <>
      <div className={classes.placeholder}></div>
      {showLoading && <LinearProgress color="primary" />}
      <div className={classes.topbarContainer}>
        <div>
          <Image
            src="/assets/logo.png"
            alt="Smartifier Logo"
            height={100}
            width={100}
          />
        </div>
        <NavItems setShowLoading={setShowLoading} />
        <Login />
      </div>
    </>
  );
};

export default Topbar;
