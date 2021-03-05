import { Divider, makeStyles, Typography, withStyles } from "@material-ui/core";
import React from "react";
import IPostSuggestion from "../../../Models/IPostSuggestion";
import PostSuggestion from "../PostSuggestion/PostSuggestion";

interface IProps {
  topPosts: IPostSuggestion[];
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});

const TopPostsByViews: React.FC<IProps> = ({ topPosts }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.heading}>Top Articles</div>
        <HeadingDivider light />
      </div>
      {topPosts.map((post) => (
        <PostSuggestion key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TopPostsByViews;

const Heading = withStyles({
  root: { marginBottom: 5, fontWeight: "bold" },
})(Typography);

const HeadingDivider = withStyles({
  root: { marginBottom: 10 },
})(Divider);
