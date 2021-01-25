import { makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {}

const useStyles = makeStyles({
  container: {
    minWidth: 300,
    height: 700,
    backgroundColor: "#F3F5F8",
    marginLeft: "8%",
    ["@media (max-width: 750px)"]: {
      display: "none",
    },
  },
});

const Sidebar: React.FC<IProps> = () => {
  const classes = useStyles();

  return <div className={classes.container}>hello</div>;
};

export default Sidebar;
