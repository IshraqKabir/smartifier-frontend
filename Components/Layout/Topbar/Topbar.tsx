import React, { useState } from "react";

import { LinearProgress, makeStyles } from "@material-ui/core";
import Image from "next/image";
import NavItems from "./NavItems/NavItems";
import Login from "./NavItems/NavItem/Login/Login";
import zIndexes from "../../../theme/zIndexes";

const useStyles = makeStyles({
  topbarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    borderBottomRightRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    zIndex: zIndexes.normal,
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
  outerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  mobileNavItems: {
    backgroundColor: "rgba(0, 34, 94, 0.8)",
    padding: "0.5rem 1rem",
    color: "white",
    position: "fixed",
    top: 100,
    left: 0,
    right: 0,
    zIndex: 40,
    // overflowX: "scroll",
    ["@media (min-width: 700px)"]: {
      display: "none",
    },
  },
  pcNavItems: {
    width: "60%",
    ["@media (max-width: 700px)"]: {
      display: "none",
    },
  },
});

const Topbar: React.FC<{}> = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.placeholder}></div>
      {showLoading && <LinearProgress color="primary" />}
      <div className={classes.outerContainer}>
        <div className={classes.topbarContainer}>
          <div>
            <Image
              src="/assets/new_logo.png"
              alt="Smartifier Logo"
              height={45}
              width={135}
            />
          </div>
          <div className={classes.pcNavItems}>
            <NavItems setShowLoading={setShowLoading} />
          </div>
          <Login />
        </div>
        <div className={classes.mobileNavItems}>
          <NavItems setShowLoading={setShowLoading} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
