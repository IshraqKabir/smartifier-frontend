import { makeStyles } from "@material-ui/core";
import React from "react";
import IPostSuggestion from "../../Models/IPostSuggestion";
import TopPostsByViews from "./TopPostsByViews/TopPostsByViews";

interface IProps {
  topPosts: IPostSuggestion[];
}

const useStyles = makeStyles({
  container: {
    minWidth: 414,
    height: "100%",
    backgroundColor: "#F3F5F8",
    marginLeft: "8%",
    ["@media (max-width: 750px)"]: {
      display: "none",
    },
    paddingBlock: 30,
    paddingInline: 20,
    color: "#97A5B8",
  },
});

const Sidebar: React.FC<IProps> = ({ topPosts }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TopPostsByViews topPosts={topPosts} />
    </div>
  );
};

export default Sidebar;
